import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-follow-requests',
  templateUrl: './follow-requests.component.html',
  styleUrls: ['./follow-requests.component.css']
})
export class FollowRequestsComponent implements OnInit {

  requests: Array<UserModel> = [];

  constructor(private userService: UserService) { 
    this.userService.getAllRequests().subscribe(request => {
      this.requests = request;
    });

  }

  ngOnInit(): void {
  }

}
