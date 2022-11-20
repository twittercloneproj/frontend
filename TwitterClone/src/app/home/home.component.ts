import { Component, OnInit } from '@angular/core';
import { TweetModel } from '../shared/tweet-model';
import { TweetService } from '../shared/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tweets: Array<TweetModel> = [];

  constructor(private tweetService: TweetService) { 
    this.tweetService.getAllTweets().subscribe(tweet => {
      this.tweets = tweet;
    });
  }

  ngOnInit(): void {
  }

}
