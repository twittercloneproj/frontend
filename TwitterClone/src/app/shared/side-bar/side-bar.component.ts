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
    this.router.navigateByUrl('/user-profilenewuser');
  }

  // goToProfile() {
  //   this.router.navigateByUrl('/user-profile');
  // }

  // changePassword() {
  //   this.router.navigateByUrl('/forgot-form');
  // }

  changePassword() {
     this.router.navigateByUrl('/forgot-form-auth');
  }

  goToProfileBusiness() {
    this.router.navigateByUrl('/user-profilebusiness');
  }

  changePrivacy() {
    this.router.navigateByUrl('/change-privacy');
  }

  getFollowRequests() {
    this.router.navigateByUrl('/follow-requests');
  }

  followNewUsers() {
    this.router.navigateByUrl('/follow-new-users');
  }

  getMyFollowers() {
    this.router.navigateByUrl('/my-followers');
  }

  getPeopleIFollow() {
    this.router.navigateByUrl('/people-i-follow');
  }

  getSuggestions() {
    this.router.navigateByUrl('/suggestions');
  }

  unfollowUsers() {
    this.router.navigateByUrl('/unfollow');
  }

  acceptRequests() {
    this.router.navigateByUrl('/accept');
  }

}
