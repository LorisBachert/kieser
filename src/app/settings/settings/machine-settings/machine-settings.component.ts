import {Component, Input, OnInit} from '@angular/core';
import {MachineSettings} from '../../shared/model/machine-settings.model';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-machine-settings',
  templateUrl: './machine-settings.component.html',
  styleUrls: ['./machine-settings.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class MachineSettingsComponent implements OnInit {

  @Input() machineSettings!: MachineSettings;

  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
