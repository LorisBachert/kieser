import {MachineSettings} from '../../../settings/shared/model/machine-settings.model';

export class WorkoutResult {
  date: Date;
  constructor(public results: MachineResult[] = []) {
    this.date = new Date();
  }
}

export class MachineResult {
  name: string;
  weight: number;

  constructor(machineSettings: MachineSettings, public seconds: number) {
    this.name = machineSettings.name;
    this.weight = machineSettings.weight;
  }
}
