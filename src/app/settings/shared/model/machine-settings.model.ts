export class MachineSettings {
  constructor(public name: string, public weight: number, public customSettings?: CustomMachineSetting[]) {
  }
}

export class CustomMachineSetting {
  constructor(public name: string, public value: string | number) {
  }
}
