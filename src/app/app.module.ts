// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LayoutHeaderComponent, SharedModule, ApiService, AuthguardService, LoginService, StorageService } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LoginComponent
  ],
  imports: [
    // BrowserModule,
    HomeModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AuthguardService,
    LoginService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
