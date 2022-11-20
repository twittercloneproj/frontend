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
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
