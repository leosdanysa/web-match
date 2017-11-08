import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared';

const loginRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent,
    RouterModule
  ]
})
export class LoginModule { }
