import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-follow-new-users',
  templateUrl: './follow-new-users.component.html',
  styleUrls: ['./follow-new-users.component.css']
})

export class FollowNewUsersComponent implements OnInit {

  newfollowings: Array<UserModel> = [{id: 63937,"name":"name: grafbaza5","surname":"surname: grafbaza5","username":"username: grafbaza5","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63938,"name":"name: Obican","surname":"surname: Obicnic","username":"username: obican123","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63939,"name":"","surname":"","username":"username: biznis123","password":"","sex": "","age": 0,"town":"town: NS","role":"role: Business", "email": "oliver.kojic22@gmail.com", "firm": "biznis kompanija", "website": "fjafawjk", "privacy": ""}, {id: 63940,"name":"name: grafbaza","surname":"surname: grafbaza5","username":"username: grafbaza","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63941,"name":"name: grafbaza2","surname":"surname: grafbaza5","username":"username: grafbaza2","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63942,"name":"name: grafbaza3","surname":"surname: grafbaza5","username":"username: grafbaza3","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63944,"name":"name: grafbaza4","surname":"surname: grafbaza5","username":"username: grafbaza4","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63945,"name":"name: milos","surname":"surname: grafbaza5","username":"username: milos","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}];

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { 

  }

  ngOnInit(): void {

  }

  createFollowGrafBaza5() {
      this.userService.createFollowGraBaza5().subscribe((data) => {
      this.router.navigateByUrl('/all');
    }, error => {
      throwError(error);
    })
  }

  createFollowObican1234() {
    this.userService.createFollowObican1234().subscribe((data) => {
    this.router.navigateByUrl('/all');
  }, error => {
    throwError(error);
  })
}

createFollowBiznis123() {
  this.userService.createFollowBiznis123().subscribe((data) => {
  this.router.navigateByUrl('/all');
}, error => {
  throwError(error);
})
}

createFollowGrafBaza() {
  this.userService.createFollowGrafBaza().subscribe((data) => {
  this.router.navigateByUrl('/all');
}, error => {
  throwError(error);
})
}

createFollowGrafBaza2() {
  this.userService.createFollowGrafBaza2().subscribe((data) => {
  this.router.navigateByUrl('/all');
}, error => {
  throwError(error);
})
}

createFollowGrafBaza3() {
  this.userService.createFollowGrafBaza3().subscribe((data) => {
  this.router.navigateByUrl('/all');
}, error => {
  throwError(error);
})
}

createFollowGrafBaza4() {
  this.userService.createFollowGrafBaza4().subscribe((data) => {
  this.router.navigateByUrl('/all');
}, error => {
  throwError(error);
})
}

createFollowMilos() {
  this.userService.createFollowMilos().subscribe((data) => {
  this.router.navigateByUrl('/all');
}, error => {
  throwError(error);
})
}

}
