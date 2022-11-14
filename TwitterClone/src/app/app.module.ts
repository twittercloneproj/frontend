import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { TweetTileComponent } from './tweet-tile/tweet-tile.component';
import { TwitterSideMenuComponent } from './twitter-side-menu/twitter-side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomefeedComponent,
    TweetTileComponent,
    TwitterSideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
