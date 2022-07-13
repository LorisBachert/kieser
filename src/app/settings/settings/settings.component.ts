import {Component, OnInit, ViewChild} from '@angular/core';
import {WorkoutDefinitionService} from '../shared/service/workout-definition.service';
import {MachineSettings} from '../shared/model/machine-settings.model';
import {WorkoutDefinition} from '../shared/model/workout-definition.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @ViewChild(NgForm) form?: NgForm;

  workoutDefinition!: WorkoutDefinition;

  constructor(private workoutDefinitionService: WorkoutDefinitionService) {
    this.workoutDefinition = this.workoutDefinitionService.workoutDefinition || new WorkoutDefinition([]);
  }

  ngOnInit(): void {
  }

  addMachineSetting() {
    this.workoutDefinition.machineSettings.push(new MachineSettings('', 0))
  }

  save() {
    this.workoutDefinitionService.setWorkoutDefinition(this.workoutDefinition);
    this.form?.form.markAsPristine();
  }
}
