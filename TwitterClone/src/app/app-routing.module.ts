import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { PasswordComponent } from './password/password.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { TwitterRegisterBusinessComponent } from './twitter-register-business/twitter-register-business.component';
import { TwitterRegisterComponent } from './twitter-register/twitter-register.component';

const routes: Routes = [
  { path: 'all', component: HomeComponent },
  { path: 'login', component: TwitterLoginComponent},
  { path: 'register-business', component: TwitterRegisterBusinessComponent },
  { path: 'register', component: TwitterRegisterComponent },
  { path: 'home', component: HomefeedComponent },
  { path: 'password', component: PasswordComponent},
  { path: 'tweets', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
