import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-followers-tile',
  templateUrl: './my-followers-tile.component.html',
  styleUrls: ['./my-followers-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyFollowersTileComponent implements OnInit {

  @Input() myfollowers: UserModel[];

  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) {
      this.userService.getAllRequests().subscribe(myfollower => {
        this.myfollowers = myfollower;
      })
      
     }

  ngOnInit(): void {

  }

}
