import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePrivacyComponent } from './change-privacy/change-privacy.component';
import { FollowNewUsersComponent } from './follow-new-users/follow-new-users.component';
import { FollowRequestsComponent } from './follow-requests/follow-requests.component';
import { ForgotFormComponent } from './forgot-form/forgot-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { PasswordComponent } from './password/password.component';
import { PeopleIFollowComponent } from './people-i-follow/people-i-follow.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { TwitterLogintwoComponent } from './twitter-logintwo/twitter-logintwo.component';
import { TwitterRegisterBusinessComponent } from './twitter-register-business/twitter-register-business.component';
import { TwitterRegisterComponent } from './twitter-register/twitter-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfilebusinessComponent } from './user-profilebusiness/user-profilebusiness.component';
import { UserProfilenewuserComponent } from './user-profilenewuser/user-profilenewuser.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: 'all', component: HomeComponent },
  { path: 'login', component: TwitterLoginComponent},
  { path: 'register-business', component: TwitterRegisterBusinessComponent },
  { path: 'register', component: TwitterRegisterComponent },
  { path: '', component: HomefeedComponent },
  { path: 'password', component: PasswordComponent},
  { path: 'tweets', component: CreatePostComponent},
  {path: 'forgot', component: ForgotPasswordComponent},
  {path: 'forgot-form', component: ForgotFormComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'verify', component:VerifyComponent},
  {path: 'loginn', component: TwitterLogintwoComponent},
  {path: 'user-profilebusiness', component: UserProfilebusinessComponent},
  {path: 'user-profilenewuser', component: UserProfilenewuserComponent},
  {path: 'change-privacy', component: ChangePrivacyComponent},
  {path: 'follow-requests', component: FollowRequestsComponent},
  {path: 'follow-new-users', component: FollowNewUsersComponent},
  {path: 'my-followers', component: MyFollowersComponent},
  {path: 'people-i-follow', component: PeopleIFollowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
