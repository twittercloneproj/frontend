import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotFormComponent } from './forgot-form/forgot-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { PasswordComponent } from './password/password.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { TwitterRegisterBusinessComponent } from './twitter-register-business/twitter-register-business.component';
import { TwitterRegisterComponent } from './twitter-register/twitter-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'all', component: HomeComponent },
  { path: 'login', component: TwitterLoginComponent},
  { path: 'register-business', component: TwitterRegisterBusinessComponent },
  { path: 'register', component: TwitterRegisterComponent },
  { path: 'home', component: HomefeedComponent },
  { path: 'password', component: PasswordComponent},
  { path: 'tweets', component: CreatePostComponent},
  {path: 'forgot', component: ForgotPasswordComponent},
  {path: 'forgot-form', component: ForgotFormComponent},
  {path: 'user-profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
