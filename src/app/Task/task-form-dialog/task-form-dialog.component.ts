import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/tast/task.service';

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.css']
})
export class TaskFormDialogComponent implements OnInit  {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private tastService: TaskService
  ) { }
  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3),]],
      description: ['', [Validators.required, Validators.maxLength(500)]]
    })
  }
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }
submit() {
  // let taskData = {
  //   title: this.myForm.value.title,
  //   description:  this.myForm.value.description,
  // }
  //  console.log( taskData);
   this.tastService.createTask(this.myForm.value).subscribe( res => {
     console.log(res);
   })
}

}
