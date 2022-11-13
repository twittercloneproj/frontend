import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { TwitterRegisterComponent } from './twitter-register/twitter-register.component';
import { TwitterRegisterBusinessComponent } from './twitter-register-business/twitter-register-business.component';


@NgModule({
  declarations: [
    AppComponent,
    TwitterLoginComponent,
    TwitterRegisterComponent,
    TwitterRegisterBusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
