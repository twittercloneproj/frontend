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
    UserTilebusinessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
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
