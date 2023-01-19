import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  myfollowers: Array<UserModel> = [];

  constructor(private userService: UserService) { 
    this.userService.getMyFollowers().subscribe(myfollower => {
      this.myfollowers = myfollower;
    });

  }

  ngOnInit(): void {
  }

}
