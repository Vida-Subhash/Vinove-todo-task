import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  todo:any[] =[];
  inprogress:any[] = [];
  done:any[] = [];

  constructor(
    public dialog: MatDialog,
    private taskService:TaskService) { }
 ngOnInit() {
        this.taskService.taskData.subscribe( res => {
          this.todo.push(res);
        })
      this.taskService.getAllTask().subscribe( res => {
          this.todo = res;
      });
 }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      height: '300px',
      width: '600px',
    });
  }




}
