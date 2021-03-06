import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  myForm!: FormGroup;
  userDetaisl: any[]=[];
  data!:any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['subhash.ramshetti9768@gmail.com', [Validators.required, Validators.email]],
      password: [ 'Subhash1234', [Validators.required, Validators.minLength(5)] ]
    });
    // this.reactiveForm();
    this.authService.getUser().subscribe( res => {
      this.userDetaisl = res;
      console.log(res);
    });
  }


  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
      console.log(this.myForm.value);
      this.userDetaisl.filter(ele => {
        if(ele.email === this.myForm.value.email && ele.password === this.myForm.value.password) {
          console.log("user found", ele);
          this.router.navigateByUrl('task');
          this.authService.isLoggedIn.next(true);
            // localStorage.setItem("token", "HDHJHDBGDG45484548DSDSFCSWTFVDMFIDJGFHDFHD");
          } else {
           alert("Wrong details");
          }
        });
  }
}
