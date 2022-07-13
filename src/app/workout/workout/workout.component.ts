import { Component, OnInit } from '@angular/core';
import {WorkoutService, WorkoutState} from '../shared/service/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workoutStates = WorkoutState;

  constructor(public workoutService: WorkoutService) { }

  ngOnInit(): void {
  }

}
