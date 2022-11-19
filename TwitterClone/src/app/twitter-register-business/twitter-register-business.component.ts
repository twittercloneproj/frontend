import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TwitterRegisterBusinessPayload } from './twitter-register-business.payload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-twitter-register-business',
  templateUrl: './twitter-register-business.component.html',
  styleUrls: ['./twitter-register-business.component.css']
})
export class TwitterRegisterBusinessComponent implements OnInit {

  twitterRegisterBusinessPayload: TwitterRegisterBusinessPayload;
  signupForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService) {
    this.twitterRegisterBusinessPayload = {
      companyName: '',
      email: '',
      website: '',
      username: '',
      password: '',
      repeatedPassword: ''
    };
   }

   ngOnInit(): void {
    this.signupForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatedPassword: new FormControl('', Validators.required)
    });
  }

  signup() {
    this.twitterRegisterBusinessPayload.companyName = this.signupForm.get('companyName')?.value;
    this.twitterRegisterBusinessPayload.email = this.signupForm.get('email')?.value;
    this.twitterRegisterBusinessPayload.website = this.signupForm.get('website')?.value;
    this.twitterRegisterBusinessPayload.username = this.signupForm.get('username')?.value;
    this.twitterRegisterBusinessPayload.password = this.signupForm.get('password')?.value;
    this.twitterRegisterBusinessPayload.repeatedPassword = this.signupForm.get('repeatedPassword')?.value;
  }

}
