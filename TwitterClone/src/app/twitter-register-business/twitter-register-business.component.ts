import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TwitterRegisterBusinessPayload } from './twitter-register-business.payload';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { UserService } from '../shared/user.service';
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { RecaptchaModule } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-twitter-register-business',
  templateUrl: './twitter-register-business.component.html',
  styleUrls: ['./twitter-register-business.component.css']
})
export class TwitterRegisterBusinessComponent implements OnInit {

  login = 'login';

  public captchaResolved : boolean = false;

  checkCaptcha(captchaResponse : string) {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
}

  blacklist: string = "apple123#"

  isBlacklisted(password: string){
    if(this.blacklist.includes(password.toLocaleLowerCase())) return true;
    else return false;
  }

  token: string|undefined;

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }

  twitterRegisterBusinessPayload: TwitterRegisterBusinessPayload;
  signupForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) {
    this.token = undefined;
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
      firm: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      website: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])])
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
export function forbiddenNamesValidator(forbiddenNames: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenNames.some(re => re.test(control.value));
      return forbidden ? { 'forbiddenNames': {value: control.value} } : null;
  };
}
