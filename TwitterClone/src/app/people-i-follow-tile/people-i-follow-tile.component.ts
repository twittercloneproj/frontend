import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-people-i-follow-tile',
  templateUrl: './people-i-follow-tile.component.html',
  styleUrls: ['./people-i-follow-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PeopleIFollowTileComponent implements OnInit {

  @Input() peoplesifollow: UserModel[];

  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) {
      this.userService.getPeopleIFollow().subscribe(peopleifollow => {
        this.peoplesifollow = peopleifollow;
      })
      
     }

  ngOnInit(): void {

  }

}
