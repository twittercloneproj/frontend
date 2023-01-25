import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user-model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-suggestions',
  templateUrl: './my-suggestions.component.html',
  styleUrls: ['./my-suggestions.component.css']
})
export class MySuggestionsComponent implements OnInit {

  mysuggestions: Array<UserModel> = [];

  constructor(private userService: UserService) { 
    this.userService.getMySuggestions().subscribe(mysuggestion => {
      this.mysuggestions = mysuggestion;
    });

  }

  ngOnInit(): void {
    
  }

}
