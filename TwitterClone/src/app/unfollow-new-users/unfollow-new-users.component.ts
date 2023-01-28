import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-unfollow-new-users',
  templateUrl: './unfollow-new-users.component.html',
  styleUrls: ['./unfollow-new-users.component.css']
})
export class UnfollowNewUsersComponent implements OnInit {

  newunfollowings: Array<UserModel> = [{id: 63937,"name":"name: grafbaza5","surname":"surname: grafbaza5","username":"username: grafbaza5","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}];

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { 

  }

  ngOnInit(): void {

  }

  unfollowGrafBaza5() {
      this.userService.createUnfollowGrafBaza5().subscribe((data) => {
      this.router.navigateByUrl('/all');
    }, error => {
      throwError(error);
    })
  }

//   createFollowObican123() {
//     this.userService.createFollowObican123().subscribe((data) => {
//     this.router.navigateByUrl('/all');
//   }, error => {
//     throwError(error);
//   })
// }

// createFollowBiznis123() {
//   this.userService.createFollowBiznis123().subscribe((data) => {
//   this.router.navigateByUrl('/all');
// }, error => {
//   throwError(error);
// })
// }

}
