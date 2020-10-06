import {AfterViewInit, Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {TaskAddComponent} from '../task-add/task-add.component'
import { Task } from '../Task';
import { TaskManagerService } from '../task-manager.service';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements AfterViewInit {

  tasks: Task[];
  displayedColumns: string[] = ['id', 'text', 'dueto'];
  dataSource : MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private taskManager: TaskManagerService, private changeDetectorRefs: ChangeDetectorRef) {
    
    this.dataSource = new MatTableDataSource<Task>();
    this.updateView();
  }
  
  updateView(): void {
    this.taskManager.getTasks()
    .subscribe(tasks =>  this.dataSource.data  = tasks);
  }

  deleteTask(task: Task): void {
   this.taskManager.removeTask(task);
   this.updateView();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
  }
}
