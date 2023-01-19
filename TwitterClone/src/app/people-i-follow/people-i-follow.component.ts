import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-people-i-follow',
  templateUrl: './people-i-follow.component.html',
  styleUrls: ['./people-i-follow.component.css']
})
export class PeopleIFollowComponent implements OnInit {

  peoplesifollow: Array<UserModel> = [];

  constructor(private userService: UserService) { 
    this.userService.getPeopleIFollow().subscribe(peopleifollow => {
      this.peoplesifollow = peopleifollow;
    });

  }

  ngOnInit(): void {
    
  }

}
