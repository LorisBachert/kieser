import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings/settings.component';
import {WorkoutComponent} from './workout/workout/workout.component';
import {HistoryComponent} from './history/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
