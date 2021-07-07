import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistationComponent } from './components/user-registation/user-registation.component';
import { AuthGaurdService } from './services/auth-guard/auth-guard.service';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';

const routes: Routes = [
  {
    path: '',
    component: UserRegistationComponent
  },
  {
    path: 'user-registation',
    component: UserRegistationComponent
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'task',
    component: TodoTaskComponent,
    canActivate: [AuthGaurdService]
  },
   {
     path:'**',
     redirectTo: 'user-registation',
     pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
