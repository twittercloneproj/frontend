import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/user-model';
import { Router } from '@angular/router';
import { ProfileModelBusiness } from '../shared/profile-modelbusiness';

@Component({
  selector: 'app-user-tilebusiness',
  templateUrl: './user-tilebusiness.component.html',
  styleUrls: ['./user-tilebusiness.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserTilebusinessComponent {

  @Input() users: ProfileModelBusiness[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

}
