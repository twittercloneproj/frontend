import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-suggestions-tile',
  templateUrl: './my-suggestions-tile.component.html',
  styleUrls: ['./my-suggestions-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MySuggestionsTileComponent implements OnInit {

  @Input() mysuggestions: UserModel[];

  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) {
      this.userService.getMySuggestions().subscribe(mysuggestion => {
        this.mysuggestions = mysuggestion;
      })
      
     }

  ngOnInit(): void {

  }

}
