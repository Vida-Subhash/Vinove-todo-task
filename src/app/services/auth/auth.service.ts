import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean> =  new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }


postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/users", data)
    .pipe(map((res: any ) => {
      return res;
    }));
  }

getUser() {
  return this.http.get<any>("http://localhost:3000/users")
  .pipe(map((res: any ) => {
    return res;
  }));
}



}
