import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidator, AsyncValidatorFn } from '@angular/forms';
import { LoginRequestPayload } from './login-request.payload';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AbstractControl, ValidatorFn, FormBuilder } from "@angular/forms";
import { RecaptchaModule } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-twitter-login',
  templateUrl: './twitter-login.component.html',
  styleUrls: ['./twitter-login.component.css']
})

export class TwitterLoginComponent implements OnInit {

  register = 'register';
  business = 'register-business';
  forgot = 'forgot-form';
  home = 'home';
  password = 'password';

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

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder,
    private authService: AuthService) {
      this.token = undefined;
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])])
    });

    // this.activatedRoute.queryParams
    //   .subscribe(params => {
    //     if (params.registered !== undefined && params.registered === 'true') {
    //       this.toastr.success('Signup Successful');
    //       this.registerSuccessMessage = 'Please Check your inbox for activation email '
    //         + 'activate your account before you Login!';
    //     }
    // });

  }

  login() {


    this.loginRequestPayload.username = this.loginForm.get('username')?.value;
    this.loginRequestPayload.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginRequestPayload).subscribe((data) => {
      this.router.navigateByUrl('/all');
    }, error => {
      throwError(error);
    })
  }

    // this.authService.login(this.loginRequestPayload).subscribe(data => {
    //   this.isError = false;
    //   this.router.navigateByUrl('');
    //   this.toastr.success('Login Successful');
    // }, error => {
    //   this.isError = true;
    //   throwError(error);
    // });

  }


export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? { 'forbiddenName': {value: control.value} } : null;
    };
}

export function forbiddenNamesValidator(forbiddenNames: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenNames.some(re => re.test(control.value));
      return forbidden ? { 'forbiddenNames': {value: control.value} } : null;
  };
}
