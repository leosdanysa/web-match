import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {
  EntityExpansionPanelComponent,
  FileComponent,
  ProgressBarIndeterminateComponent } from './components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { LayoutFooterComponent } from './layout/';

@NgModule({
  declarations: [
    FileComponent,
    EntityExpansionPanelComponent,
    ProgressBarIndeterminateComponent,
    LayoutFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTabsModule,
    MatInputModule,
    MatStepperModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatInputModule,
    MatStepperModule,
    FileComponent,
    EntityExpansionPanelComponent,
    ProgressBarIndeterminateComponent,
    LayoutFooterComponent
  ]
})
export class SharedModule {}
