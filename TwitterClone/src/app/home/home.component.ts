import { Component, OnInit } from '@angular/core';
import { TweetModel } from '../shared/tweet-model';
import { TweetService } from '../shared/tweet.service';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';
import { ProfileModel } from '../shared/profile-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tweets: Array<TweetModel> = [];

  constructor(private tweetService: TweetService, private userService: UserService) { 
    this.tweetService.getAllTweets().subscribe(tweet => {
      this.tweets = tweet;
    });

  }

  ngOnInit(): void {
  }

}
