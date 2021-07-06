import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { user } from 'src/app/user.modal';

@Component({
  selector: 'app-user-registation',
  templateUrl: './user-registation.component.html',
  styleUrls: ['./user-registation.component.css']
})
export class UserRegistationComponent implements OnInit {
  myForm!: FormGroup;
  userModal: user = new user();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3),]],
      email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }


  submitForm() {
    // console.log(this.myForm.value);
    // this.userModal.name = this.myForm.value.name;
    // this.userModal.email = this.myForm.value.email;
    // this.userModal.password = this.myForm.value.password;
    this.authService.postUser(this.myForm.value).subscribe( res => {
      console.log(res);
      this.myForm.reset();
      this.router.navigateByUrl('user-login');
    });
  }

registeredUser() {
  this.router.navigateByUrl('user-login');
}



}

