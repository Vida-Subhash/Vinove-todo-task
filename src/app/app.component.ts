import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn!: boolean
  user!:string
constructor(
  private router:Router,
  private authService:AuthService) {}
  ngOnInit() {
    this.authService.isLoggedIn.subscribe( res=> {
      console.log(res);
      this.isLoggedIn =res;
    });

  }

  backToHome() {
      this.router.navigateByUrl('user-login');
      this.authService.isLoggedIn.next(false);
      // localStorage.removeItem("token");
  }
}
