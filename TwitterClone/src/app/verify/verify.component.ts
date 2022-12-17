import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidator, AsyncValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AbstractControl, ValidatorFn, FormBuilder } from "@angular/forms";
import { RecaptchaModule } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';
import { VerifyRequestPayload } from './verify-request.payload';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  register = 'register';
  business = 'register-business';
  forgot = 'forgot-form';
  home = 'home';
  password = 'password';
  public message = 'This code does not match with given code';

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

  verifyForm: FormGroup;
  verifyRequestPayload: VerifyRequestPayload;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) {
      this.token = undefined;
    this.verifyRequestPayload = {
      verify: ''
    };
  }

  ngOnInit(): void {
    this.verifyForm = new FormGroup({
      verify: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), Validators.minLength(6), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])])
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

  verify() {


    this.verifyRequestPayload.verify = this.verifyForm.get('verify')?.value;
    if(this.verifyForm.get('verify')?.value == '747888') {
      this.router.navigateByUrl('/login');
    } else {
      alert(this.message)
    }

    //this.router.navigateByUrl('/login');

    //this.authService.login(this.loginRequestPayload).subscribe((data) => {
    //  this.router.navigateByUrl('/all');
    //}, error => {
    //  throwError(error);
    //})
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
