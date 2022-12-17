import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { TweetModel } from '../shared/tweet-model';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';
import { ProfileModelBusiness } from '../shared/profile-modelbusiness';

@Component({
  selector: 'app-user-profilebusiness',
  templateUrl: './user-profilebusiness.component.html',
  styleUrls: ['./user-profilebusiness.component.css']
})
export class UserProfilebusinessComponent implements OnInit {

  //name: string;
  //tweets: TweetModel[];
  tweets: Array<TweetModel> = [];
  users: Array<ProfileModelBusiness> = [{id: 6393711, "username":"username: zoran","password":"","firm":"firm: kompanija","email": "email: oliver.kojic22@gmail.com","website":"website: fajhfawk","role":"role: Business"}];

  constructor(private authService: AuthService, private userService: UserService) {

    this.authService.getAllTweets().subscribe(tweet => {
      this.tweets = tweet;
    });

    this.userService.getUserBusiness().subscribe(user => {
      this.users = user;
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
