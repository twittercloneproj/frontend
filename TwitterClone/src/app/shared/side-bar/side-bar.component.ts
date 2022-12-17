import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreateTweet() {
    this.router.navigateByUrl('/tweets');
  }

  goToProfile() {
    this.router.navigateByUrl('/user-profile');
  }

  changePassword() {
    this.router.navigateByUrl('/forgot-form');
  }

  goToProfileBusiness() {
    this.router.navigateByUrl('/user-profilebusiness');
  }

}
