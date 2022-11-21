import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TwitterRegisterBusinessPayload } from './twitter-register-business.payload';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-twitter-register-business',
  templateUrl: './twitter-register-business.component.html',
  styleUrls: ['./twitter-register-business.component.css']
})
export class TwitterRegisterBusinessComponent implements OnInit {

  twitterRegisterBusinessPayload: TwitterRegisterBusinessPayload;
  signupForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) {
    this.twitterRegisterBusinessPayload = {
      firm: '',
      email: '',
      website: '',
      username: '',
      password: ''
    };
   }

   ngOnInit(): void {
    this.signupForm = new FormGroup({
      firm: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  signupBusiness() {
    this.twitterRegisterBusinessPayload.firm = this.signupForm.get('firm')?.value;
    this.twitterRegisterBusinessPayload.email = this.signupForm.get('email')?.value;
    this.twitterRegisterBusinessPayload.website = this.signupForm.get('website')?.value;
    this.twitterRegisterBusinessPayload.username = this.signupForm.get('username')?.value;
    this.twitterRegisterBusinessPayload.password = this.signupForm.get('password')?.value;

    this.userService.signupBusiness(this.twitterRegisterBusinessPayload).subscribe((data) => {
      this.router.navigateByUrl('/login');
    }, error => {
      throwError(error);
    })
  }

}
