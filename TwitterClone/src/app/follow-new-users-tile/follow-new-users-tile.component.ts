import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-follow-new-users-tile',
  templateUrl: './follow-new-users-tile.component.html',
  styleUrls: ['./follow-new-users-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FollowNewUsersTileComponent implements OnInit {

  @Input() newfollowings: UserModel[];

  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) {
      
     }

  ngOnInit(): void {

  }
}
