import {Injectable} from '@angular/core';
import {WorkoutResult} from '../../../workout/shared/model/workout-result.model';

const LOCAL_STORAGE_KEY = 'history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public history: WorkoutResult[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  public addToHistory(workout: WorkoutResult) {
    this.history.splice(0, 0, workout);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.history));
  }

  private loadFromLocalStorage() {
    const storageItem = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageItem) {
      this.history = JSON.parse(storageItem) as WorkoutResult[];
    }
  }
}
