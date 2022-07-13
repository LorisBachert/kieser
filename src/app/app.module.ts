import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {SettingsModule} from './settings/settings.module';
import {WorkoutModule} from './workout/workout.module';
import {HistoryModule} from './history/history.module';
import {VoiceRecognitionModule} from './voice-recognition/voice-recognition.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    SettingsModule,
    WorkoutModule,
    HistoryModule,
    VoiceRecognitionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
