import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TwitterRegisterPayload } from './twitter-register.payload';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from './custom-validators';
import { throwError } from 'rxjs';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-twitter-register',
  templateUrl: './twitter-register.component.html',
  styleUrls: ['./twitter-register.component.css']
})
export class TwitterRegisterComponent implements OnInit {

  twitterRegisterPayload: TwitterRegisterPayload;
  signupForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) {
    this.twitterRegisterPayload = {
      name: '',
      surname: '',
      sex: '',
      age: 0,
      town: '',
      username: '',
      password: ''
    };
   }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signup() {
    this.twitterRegisterPayload.name = this.signupForm.get('name')?.value;
    this.twitterRegisterPayload.surname = this.signupForm.get('surname')?.value;
    this.twitterRegisterPayload.sex = this.signupForm.get('sex')?.value;
    this.twitterRegisterPayload.age = this.signupForm.get('age')?.value;
    this.twitterRegisterPayload.town = this.signupForm.get('town')?.value;
    this.twitterRegisterPayload.username = this.signupForm.get('username')?.value;
    this.twitterRegisterPayload.password = this.signupForm.get('password')?.value;

    this.userService.signup(this.twitterRegisterPayload).subscribe((data) => {
      this.router.navigateByUrl('/login');
    }, error => {
      throwError(error);
    })
  }

}
