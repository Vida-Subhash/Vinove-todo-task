import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

createTask(data: any) {
  return this.http.post(" http://localhost:3000/todo", data)
  .pipe(map( (res)=> {
    console.log(res);
  }))
}

}
