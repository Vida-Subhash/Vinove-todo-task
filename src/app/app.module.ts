import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistationComponent } from './components/user-registation/user-registation.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskFormDialogComponent } from './components/task-form-dialog/task-form-dialog.component';
import { AuthGaurdService } from './services/auth-guard/auth-guard.service';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { AuthService } from './services/auth/auth.service';
import { TaskService } from './services/task/task.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistationComponent,
    TodoTaskComponent,
    TaskFormDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    AuthGaurdService,
    AuthService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true

    }
  ],
  entryComponents: [TaskFormDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
