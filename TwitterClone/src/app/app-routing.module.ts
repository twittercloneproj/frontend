import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { TwitterRegisterBusinessComponent } from './twitter-register-business/twitter-register-business.component';
import { TwitterRegisterComponent } from './twitter-register/twitter-register.component';

const routes: Routes = [
  { path: '', component: TwitterLoginComponent },
  { path: 'register-business', component: TwitterRegisterBusinessComponent },
  { path: 'register', component: TwitterRegisterComponent },
  { path: 'home', component: HomefeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
