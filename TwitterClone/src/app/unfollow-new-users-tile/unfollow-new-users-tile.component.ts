import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-unfollow-new-users-tile',
  templateUrl: './unfollow-new-users-tile.component.html',
  styleUrls: ['./unfollow-new-users-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnfollowNewUsersTileComponent implements OnInit {

  @Input() newunfollowings: UserModel[];

  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) {
      
     }

  ngOnInit(): void {

  }

}
