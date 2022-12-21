import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/user-model';
import { Router } from '@angular/router';
import { ProfileModel } from '../shared/profile-model';

@Component({
  selector: 'app-user-tilenewuser',
  templateUrl: './user-tilenewuser.component.html',
  styleUrls: ['./user-tilenewuser.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserTilenewuserComponent implements OnInit {

  @Input() users: ProfileModel[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

}
