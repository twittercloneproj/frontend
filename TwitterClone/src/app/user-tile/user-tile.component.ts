import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/user-model';
import { Router } from '@angular/router';
import { ProfileModel } from '../shared/profile-model';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserTileComponent implements OnInit {

  @Input() users: ProfileModel[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

}
