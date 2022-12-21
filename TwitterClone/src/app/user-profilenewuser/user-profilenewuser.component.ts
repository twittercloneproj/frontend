import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { TweetModel } from '../shared/tweet-model';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';
import { ProfileModel } from '../shared/profile-model';

@Component({
  selector: 'app-user-profilenewuser',
  templateUrl: './user-profilenewuser.component.html',
  styleUrls: ['./user-profilenewuser.component.css']
})
export class UserProfilenewuserComponent implements OnInit {

  //name: string;
  //tweets: TweetModel[];
  tweets: Array<TweetModel> = [];
  users: Array<ProfileModel> = [{id: 63938,"name":"name: Bogdan","surname":"surname: Bogdanic","username":"username: bogdan","password":"","sex":"sex: male","age": 25,"town":"town: NS","role":"role: Regular"}];

  constructor(private authService: AuthService, private userService: UserService) {

    this.authService.getAllTweets().subscribe(tweet => {
      this.tweets = tweet;
    });

    this.userService.getUser().subscribe(user => {
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
