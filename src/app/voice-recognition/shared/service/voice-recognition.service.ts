import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {createVoiceRecognition} from '../../util/voice-recognition-factory.util';
import {VoiceRecognitionListener} from '../model/voice-recognition-listener.model';

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  listener: SpeechRecognition;

  public autoRestart = true;

  public listening$ = new BehaviorSubject<boolean>(false);

  private language = 'en-US';

  private listeners: Set<VoiceRecognitionListener> = new Set();

  constructor(private ngZone: NgZone) {
    this.listener = createVoiceRecognition(this.language);
    this.listener.onstart = () => {
      console.debug('Start listening...');
      this.setListening(true);
    }
    this.listener.onresult = (event: SpeechRecognitionEvent) => {
      // @ts-ignore
      const result: SpeechRecognitionResult = event.results[event.results.length - 1];
      this.onResult(result);
    };
    this.listener.onerror = (error: any) => {
      console.warn('error while listening', error);
    }
    this.listener.onend = () => {
      console.debug('Stopped listening...');
      this.setListening(false);
      if (this.autoRestart) {
        this.listener.start();
      }
    }
  }

  public start() {
    this.autoRestart = true;
    this.listener.start();
  }

  public stop() {
    this.autoRestart = false;
    this.listener.stop();
  }

  public addListener(listener: VoiceRecognitionListener) {
    this.listeners.add(listener);
  }

  private onResult(result: SpeechRecognitionResult) {
    for (let i = 0; i < result.length; i++) {
      const alternative = result[i];
      this.ngZone.run(() => {
        this.listeners.forEach(listener => listener.onVoiceRecognition(alternative));
      })
    }
  }

  private setListening(listening: boolean): void {
    this.ngZone.run(() => {
      this.listening$.next(listening);
    })
  }
}
