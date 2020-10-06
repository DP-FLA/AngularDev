import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskManagerService } from '../task-manager.service';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  tasks: Task[];
  constructor(private taskManager: TaskManagerService) { }
  
  getTasks(): void {
    this.taskManager.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
   this.taskManager.removeTask(task);
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
