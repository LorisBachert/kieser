import {Injectable} from '@angular/core';
import {WorkoutDefinition} from '../model/workout-definition.model';

const LOCAL_STORAGE_KEY = 'workout-definition';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDefinitionService {

  workoutDefinition?: WorkoutDefinition;

  constructor() {
    this.loadFromLocalStorage();
  }

  public setWorkoutDefinition(workoutDefinition: WorkoutDefinition) {
    this.workoutDefinition = workoutDefinition;
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.workoutDefinition));
  }

  private loadFromLocalStorage() {
    const storageItem = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageItem) {
      this.workoutDefinition = JSON.parse(storageItem) as WorkoutDefinition;
    }
  }
}
