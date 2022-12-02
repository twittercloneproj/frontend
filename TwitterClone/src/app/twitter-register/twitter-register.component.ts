import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TwitterRegisterPayload } from './twitter-register.payload';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from './custom-validators';
import { throwError } from 'rxjs';
import { UserService } from '../shared/user.service';
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { RecaptchaModule } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-twitter-register',
  templateUrl: './twitter-register.component.html',
  styleUrls: ['./twitter-register.component.css']
})
export class TwitterRegisterComponent implements OnInit {

  login = 'login';
  blacklist = "apple123#";

  
  isBlacklisted(password: string){
    if(this.blacklist.includes(password.toLocaleLowerCase())) return true;
    else return false;
  }

  token: string|undefined;

  public captchaResolved : boolean = false;

  checkCaptcha(captchaResponse : string) {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
}

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }

  twitterRegisterPayload: TwitterRegisterPayload;
  signupForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) {
    this.token = undefined;
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
      name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      surname: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      sex: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      age: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      town: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])])
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

export function forbiddenNamesValidator(forbiddenNames: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenNames.some(re => re.test(control.value));
      return forbidden ? { 'forbiddenNames': {value: control.value} } : null;
  };
}
