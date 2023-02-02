import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { TweetTileComponent } from './tweet-tile/tweet-tile.component';
import { TwitterSideMenuComponent } from './twitter-side-menu/twitter-side-menu.component';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { TwitterRegisterComponent } from './twitter-register/twitter-register.component';
import { TwitterRegisterBusinessComponent } from './twitter-register-business/twitter-register-business.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PasswordComponent } from './password/password.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotFormComponent } from './forgot-form/forgot-form.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { VerifyComponent } from './verify/verify.component';
import { TwitterLogintwoComponent } from './twitter-logintwo/twitter-logintwo.component';
import { UserProfilebusinessComponent } from './user-profilebusiness/user-profilebusiness.component';
import { UserTilebusinessComponent } from './user-tilebusiness/user-tilebusiness.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { PopoutWindowModule } from 'angular-popout-window';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { DialogLikesComponent } from './dialog-likes/dialog-likes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostTileprofileComponent } from './shared/post-tileprofile/post-tileprofile/post-tileprofile.component';
import { PostTileprofilebusinessComponent } from './shared/post-tileprofilebusiness/post-tileprofilebusiness/post-tileprofilebusiness.component';
import { UserTilenewuserComponent } from './user-tilenewuser/user-tilenewuser.component';
import { UserProfilenewuserComponent } from './user-profilenewuser/user-profilenewuser.component';
import { PostTileProfilenewuserComponent } from './shared/post-tileprofilenewuser/post-tile-profilenewuser/post-tile-profilenewuser.component';
import { ChangePrivacyComponent } from './change-privacy/change-privacy.component';
import { FollowRequestsComponent } from './follow-requests/follow-requests.component';
import { RequestsTileComponent } from './requests-tile/requests-tile.component';
import { FollowNewUsersComponent } from './follow-new-users/follow-new-users.component';
import { FollowNewUsersTileComponent } from './follow-new-users-tile/follow-new-users-tile.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { MyFollowersTileComponent } from './my-followers-tile/my-followers-tile.component';
import { PeopleIFollowComponent } from './people-i-follow/people-i-follow.component';
import { PeopleIFollowTileComponent } from './people-i-follow-tile/people-i-follow-tile.component';
import { MySuggestionsComponent } from './my-suggestions/my-suggestions.component';
import { MySuggestionsTileComponent } from './my-suggestions-tile/my-suggestions-tile.component';
import { UnfollowNewUsersComponent } from './unfollow-new-users/unfollow-new-users.component';
import { UnfollowNewUsersTileComponent } from './unfollow-new-users-tile/unfollow-new-users-tile.component';
import { AcceptRequestsComponent } from './accept-requests/accept-requests.component';
import { AcceptRequestsTileComponent } from './accept-requests-tile/accept-requests-tile.component';
import { CreateAcceptRequestComponent } from './create-accept-request/create-accept-request.component';
import { CreateAcceptRequestTwoComponent } from './create-accept-request-two/create-accept-request-two.component';
import { AcceptRequestThreeComponent } from './accept-request-three/accept-request-three.component';
import { CreateAcceptRequestThreeComponent } from './create-accept-request-three/create-accept-request-three.component';
import { ForgotFormAuthComponent } from './forgot-form-auth/forgot-form-auth.component';
//import { TokenInterceptor } from './token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomefeedComponent,
    TweetTileComponent,
    TwitterSideMenuComponent,
    TwitterLoginComponent,
    TwitterRegisterComponent,
    TwitterRegisterBusinessComponent,
    PasswordComponent,
    HeaderComponent,
    HomeComponent,
    PostTileComponent,
    SideBarComponent,
    CreatePostComponent,
    ForbiddenNameDirective,
    ForgotPasswordComponent,
    ForgotFormComponent,
    VoteButtonComponent,
    UserProfileComponent,
    UserTileComponent,
    VerifyComponent,
    TwitterLogintwoComponent,
    UserProfilebusinessComponent,
    UserTilebusinessComponent,
    LikeButtonComponent,
    DialogLikesComponent,
    PostTileprofileComponent,
    PostTileprofilebusinessComponent,
    UserTilenewuserComponent,
    UserProfilenewuserComponent,
    PostTileProfilenewuserComponent,
    ChangePrivacyComponent,
    FollowRequestsComponent,
    RequestsTileComponent,
    FollowNewUsersComponent,
    FollowNewUsersTileComponent,
    MyFollowersComponent,
    MyFollowersTileComponent,
    PeopleIFollowComponent,
    PeopleIFollowTileComponent,
    MySuggestionsComponent,
    MySuggestionsTileComponent,
    UnfollowNewUsersComponent,
    UnfollowNewUsersTileComponent,
    AcceptRequestsComponent,
    AcceptRequestsTileComponent,
    CreateAcceptRequestComponent,
    CreateAcceptRequestTwoComponent,
    AcceptRequestThreeComponent,
    CreateAcceptRequestThreeComponent,
    ForgotFormAuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    PopoutWindowModule,
    RecaptchaFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: TokenInterceptor,
    //  multi: true
    //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
