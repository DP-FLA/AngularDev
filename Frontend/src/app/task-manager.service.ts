import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { TASKFILLER } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})

export class TaskManagerService {
  tasks = TASKFILLER;
  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  removeTask(task: Task): void {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
        this.tasks.splice(index, 1);
    }    
  }
}
