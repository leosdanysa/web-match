import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
import { SharedModule, AuthguardService } from '../shared';

const homeRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent, canActivate: [AuthguardService]} // TODO: problem with lazy loading...investigate
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }
