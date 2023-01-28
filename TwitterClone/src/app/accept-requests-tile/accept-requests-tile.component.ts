import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-accept-requests-tile',
  templateUrl: './accept-requests-tile.component.html',
  styleUrls: ['./accept-requests-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AcceptRequestsTileComponent implements OnInit {

  @Input() acceptrequests: UserModel[];

  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) {
      
    }

  ngOnInit(): void {

  }

}
