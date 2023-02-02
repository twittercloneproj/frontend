import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../shared/user-model';

@Component({
  selector: 'app-accept-requests',
  templateUrl: './accept-requests.component.html',
  styleUrls: ['./accept-requests.component.css']
})
export class AcceptRequestsComponent implements OnInit {

  acceptrequests: Array<UserModel> = [{id: 63937,"name":"name: obican1234","surname":"surname: grafbaza5","username":"username: obican1234","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63938,"name":"name: obican123","surname":"surname: grafbaza5","username":"username: obican123","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}, {id: 63939,"name":"name: biznis12345","surname":"surname: biznis12345","username":"username: biznis12345","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  acceptRejectRequest() {
    this.router.navigateByUrl('/acceptRejectRequest');
  }

  acceptRejectRequestObican123() {
    this.router.navigateByUrl('/acceptRejectRequestTwo');
  }

  acceptRejectRequestBiznis12345() {
    this.router.navigateByUrl('/acceptRejectRequestThree');
  }

}
