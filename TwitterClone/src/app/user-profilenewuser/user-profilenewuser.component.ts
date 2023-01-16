import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { TweetModel } from '../shared/tweet-model';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';
import { ProfileModel } from '../shared/profile-model';
import { TweetService } from '../shared/tweet.service';

@Component({
  selector: 'app-user-profilenewuser',
  templateUrl: './user-profilenewuser.component.html',
  styleUrls: ['./user-profilenewuser.component.css']
})
export class UserProfilenewuserComponent implements OnInit {

  //name: string;
  //tweets: TweetModel[];
  //tweets: Array<TweetModel> = [];
  //users: Array<ProfileModel> = [{id: 63938,"name":"firm: kompanija","surname":"email: oliver.kojic22@gmail.com","username":"username: bogdann","password":"","sex":"website: website","age": 0,"town":"","role":"role: Business"}];
  tweets: TweetModel[];
  user: UserModel;

  constructor(private authService: AuthService, private userService: UserService, private tweetService: TweetService) {

    this.userService.getNewUser().subscribe(user => {
      this.user = user;
    });

    this.tweetService.getUserTweets().subscribe(tweet => {
      this.tweets = tweet;
    });

    //this.userService.getAllUsers().subscribe(user => {
    //  this.users = user;
    //});

    //this.name = this.activatedRoute.snapshot.params['name'];
    //this.tweetService.getAllTweetsByUser(this.name).subscribe(data => {
    //  this.tweets = data;
    //});
  }

  ngOnInit(): void {
    
  }
}
