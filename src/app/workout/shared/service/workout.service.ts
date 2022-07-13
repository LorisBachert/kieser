import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, interval, Subscription} from 'rxjs';
import {WorkoutDefinitionService} from '../../../settings/shared/service/workout-definition.service';
import {WorkoutDefinition} from '../../../settings/shared/model/workout-definition.model';
import {MachineResult, WorkoutResult} from '../model/workout-result.model';
import {VoiceRecognitionService} from '../../../voice-recognition/shared/service/voice-recognition.service';
import {VoiceRecognitionListener} from '../../../voice-recognition/shared/model/voice-recognition-listener.model';
import {MachineSettings} from '../../../settings/shared/model/machine-settings.model';
import {HistoryService} from '../../../history/shared/service/history.service';
import {TtsService} from '../../../tts/shared/service/tts.service';

export enum WorkoutState {
  WAITING, RUNNING, PAUSED, FINISHED
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService implements VoiceRecognitionListener {

  private readonly workoutState = new BehaviorSubject<WorkoutState>(WorkoutState.WAITING);

  public readonly workoutState$ = this.workoutState.asObservable();

  private workoutDefinition?: WorkoutDefinition;

  private machineIndex = 0;

  public workoutResult: WorkoutResult = new WorkoutResult();

  public currentResult?: MachineResult;

  private machineTimeSubscription?: Subscription;

  constructor(private workoutDefinitionService: WorkoutDefinitionService,
              private voiceRecognitionService: VoiceRecognitionService,
              private historyService: HistoryService,
              private ttsService: TtsService) {
  }

  public start() {
    this.workoutState.next(WorkoutState.RUNNING);
    this.workoutDefinition = JSON.parse(JSON.stringify(this.workoutDefinitionService.workoutDefinition));
    this.machineIndex = 0;
    this.workoutResult = new WorkoutResult();
    this.voiceRecognitionService.addListener(this);
    this.voiceRecognitionService.start();
    this.ttsService.tts('Start workout');
    this.updateNextMachine();
  }

  public finished() {
    this.currentResult = undefined;
    this.workoutState.next(WorkoutState.FINISHED);
    this.voiceRecognitionService.stop();
    this.historyService.addToHistory(this.workoutResult);
  }

  private updateNextMachine() {

    const machineSetting = this.workoutDefinition?.machineSettings[this.machineIndex];
    if (machineSetting) {
      this.currentResult = new MachineResult(machineSetting, 0);
      this.ttsService.tts('Next machine is ' + machineSetting.name + ' with ' + machineSetting.weight + ' pounds');
    } else {
      console.log('workout completed');
      this.ttsService.tts('Workout completed. Good job!');
      this.finished();
    }
  }

  onVoiceRecognition(command: SpeechRecognitionAlternative) {
    const receivedCommand = command.transcript.trim();
    console.log('transcript', receivedCommand);
    const currentMachine = this.currentResult!;
    if (receivedCommand === 'start' || receivedCommand === 'restart') {
      console.log('start machine', currentMachine.name);
      this.ttsService.tts('Start machine ' + currentMachine.name);
      this.currentResult!.seconds = 0;
      this.machineTimeSubscription = interval(1000).subscribe(() => {
        if (this.currentResult) {
          this.currentResult.seconds++;
        }
      });
    } else if (receivedCommand === 'done') {
      this.machineTimeSubscription?.unsubscribe()
      this.workoutResult.results.splice(0, 0, currentMachine);
      this.ttsService.tts('Done machine ' + currentMachine.name + ' in ' + currentMachine.seconds + ' seconds');
      console.log('Machine', currentMachine.name, 'done in', currentMachine.seconds, 'seconds')
      this.machineIndex++;
      this.updateNextMachine();
    } else if (receivedCommand === 'machine') {
      console.log('current machine is', currentMachine.name, 'with', currentMachine.weight, 'pounds');
      this.ttsService.tts('Current machine is ' + currentMachine.name + ' with ' + currentMachine.weight + ' pounds');
    }
  }
}
