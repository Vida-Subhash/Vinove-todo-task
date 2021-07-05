import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Auth/user-login/user-login.component';
import { UserRegistationComponent } from './Auth/user-registation/user-registation.component';
import { TodoTaskComponent } from './Task/todo-task/todo-task.component';

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
    // canActivate: [Authgurad]
  },
   {
     path:'**',
     redirectTo: '/user-resgistation',
     pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
