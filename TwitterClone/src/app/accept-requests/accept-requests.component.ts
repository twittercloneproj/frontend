import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../shared/user-model';

@Component({
  selector: 'app-accept-requests',
  templateUrl: './accept-requests.component.html',
  styleUrls: ['./accept-requests.component.css']
})
export class AcceptRequestsComponent implements OnInit {

  acceptrequests: Array<UserModel> = [{id: 63937,"name":"name: obican1234","surname":"surname: grafbaza5","username":"username: grafbaza5","password":"","sex":"sex: male","age": 27,"town":"town: NS","role":"role: Regular", "email": "", "firm": "", "website": "", "privacy": ""}];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  acceptRejectRequest() {
    this.router.navigateByUrl('/acceptRejectRequest');
  }

}