import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import {MatCardModule} from '@angular/material/card';
import { MachineSettingsComponent } from './settings/machine-settings/machine-settings.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SettingsComponent,
    MachineSettingsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class SettingsModule { }
