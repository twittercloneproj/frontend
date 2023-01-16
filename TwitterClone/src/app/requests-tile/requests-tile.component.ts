import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-requests-tile',
  templateUrl: './requests-tile.component.html',
  styleUrls: ['./requests-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RequestsTileComponent implements OnInit {

  @Input() requests: UserModel[];

  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) {
      this.userService.getAllRequests().subscribe(request => {
        this.requests = request;
      })
      
     }

  ngOnInit(): void {

  }

}
