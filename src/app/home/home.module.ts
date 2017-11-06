import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
import { SharedModule } from '../shared';

const homeRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }
