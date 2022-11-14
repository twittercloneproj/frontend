import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TwitterRegisterPayload } from './twitter-register.payload';

@Component({
  selector: 'app-twitter-register',
  templateUrl: './twitter-register.component.html',
  styleUrls: ['./twitter-register.component.css']
})
export class TwitterRegisterComponent implements OnInit {

  twitterRegisterPayload: TwitterRegisterPayload;
  signupForm: FormGroup;

  constructor(private router: Router) {
    this.twitterRegisterPayload = {
      name: '',
      surname: '',
      age: '',
      place: '',
      username: '',
      password: '',
      repeatedPassword: ''
    };
   }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      place: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatedPassword: new FormControl('', Validators.required),
    });
  }

  signup() {
    this.twitterRegisterPayload.name = this.signupForm.get('name').value;
    this.twitterRegisterPayload.surname = this.signupForm.get('surname').value;
    this.twitterRegisterPayload.surname = this.signupForm.get('age').value;
    this.twitterRegisterPayload.surname = this.signupForm.get('place').value;
    this.twitterRegisterPayload.surname = this.signupForm.get('username').value;
    this.twitterRegisterPayload.surname = this.signupForm.get('password').value;
    this.twitterRegisterPayload.surname = this.signupForm.get('repeatedPassword').value;
  }

}
