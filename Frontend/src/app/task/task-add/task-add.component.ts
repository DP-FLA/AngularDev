import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from '../Task';
import { TaskManagerService } from '../task-manager.service';

export interface DialogData {
  text: string;
  date: string;
}

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  @Output() addTaskEvent = new EventEmitter();

  text: string;
  constructor(public dialog: MatDialog, private taskManager: TaskManagerService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {text: this.text}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.text != null && result.date != null)
      {
        this.taskManager.addTask({ id: 99, text:result.text, dueto: new Date(result.date) });
        this.addTaskEvent.emit();
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'task-add-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}