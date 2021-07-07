import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskData =  new BehaviorSubject<any>('');
  constructor(private http: HttpClient) { }

createTask(data: any) {
  return this.http.post("http://localhost:3000/todo", data)
  .pipe(map( (res)=> {
    this.taskData.next(res);
    console.log(res);
  }));
}

getAllTask() {
  return this.http.get<any>('http://localhost:3000/todo')
  .pipe(map((res ) => {
    // console.log(res);
    return res;
  }));
}

}
