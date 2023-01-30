import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { UserService } from '../shared/user.service';
import { ForgotFormPayload } from './forgot-form.payload';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.css']
})
export class ForgotFormComponent implements OnInit {

  token: string|undefined;
  public message = 'Password and repeated password does not match!';

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

  forgotFormPayload: ForgotFormPayload;
  signupForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) { 
    this.forgotFormPayload = {
      username: '',
      password: ''
    };
    this.repeatedPassword;
  }

  private repeatedPassword: any

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])])
    });
  }

  gotoLoginForm() {
    this.router.navigateByUrl('loginn');
  }

  signup() {
    this.forgotFormPayload.username = this.signupForm.get('username')?.value;
    this.forgotFormPayload.password = this.signupForm.get('password')?.value;
    this.repeatedPassword = this.signupForm.get('repeatedPassword')?.value;

    if(this.signupForm.get('repeatedPassword')?.value === this.signupForm.get('repeatedPassword')?.value) {
      this.userService.forgotForm(this.forgotFormPayload).subscribe((data) => {
        this.router.navigateByUrl('/loginn');
      }, error => {
        throwError(error);
        })
    } else {
      alert(this.message)
    }

    //if(this.signupForm.get('repeatedPassword')?.value == 'Password123!' || this.signupForm.get('repeatedPassword')?.value == 'Password1234!' || this.signupForm.get('repeatedPassword')?.value == 'Password12345!') {
    //  this.userService.forgotForm(this.forgotFormPayload).subscribe((data) => {
    //    this.router.navigateByUrl('/loginn');
    //  }, error => {
    //    throwError(error);
    //    })
    //} else {
    //  alert(this.message)
    //}

    //this.userService.forgotForm(this.forgotFormPayload).subscribe((data) => {
    //  this.router.navigateByUrl('/loginn');
    //}, error => {
    //  throwError(error);
    //})
  }

}

export function forbiddenNamesValidator(forbiddenNames: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenNames.some(re => re.test(control.value));
      return forbidden ? { 'forbiddenNames': {value: control.value} } : null;
  };
}

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenName.test(control.value);
      return forbidden ? { 'forbiddenName': {value: control.value} } : null;
  };
}
