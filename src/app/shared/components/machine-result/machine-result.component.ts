import {Component, Input, OnInit} from '@angular/core';
import {MachineResult, WorkoutResult} from '../../../workout/shared/model/workout-result.model';

@Component({
  selector: 'app-machine-result',
  templateUrl: './machine-result.component.html',
  styleUrls: ['./machine-result.component.scss']
})
export class MachineResultComponent implements OnInit {

  @Input() result!: MachineResult;

  constructor() { }

  ngOnInit(): void {
  }

}
