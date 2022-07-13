import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MachineResultComponent} from './components/machine-result/machine-result.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    MachineResultComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MachineResultComponent
  ]
})
export class SharedModule { }
