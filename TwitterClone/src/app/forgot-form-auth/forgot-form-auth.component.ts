import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, NgForm, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-forgot-form-auth',
  templateUrl: './forgot-form-auth.component.html',
  styleUrls: ['./forgot-form-auth.component.css']
})
export class ForgotFormAuthComponent implements OnInit {

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

  signupForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService) { 
    
  }

  private password: any
  private repeatedPassword: any

  ngOnInit(): void {
    
  }

  signup() {
    this.password = this.signupForm.get('password')?.value;
    this.repeatedPassword = this.signupForm.get('repeatedPassword')?.value;

    //if(this.signupForm.get('repeatedPassword')?.value === this.signupForm.get('repeatedPassword')?.value) {
    //  this.userService.forgotForm(this.forgotFormPayload).subscribe((data) => {
    //    this.router.navigateByUrl('/loginn');
    //  }, error => {
    //    throwError(error);
    //    })
    //} else {
    //  alert(this.message)
    //}

    if(this.signupForm.get('repeatedPassword')?.value == 'Password123!' || this.signupForm.get('repeatedPassword')?.value == 'Password1234!' || this.signupForm.get('repeatedPassword')?.value == 'Password12345!') {
      this.router.navigateByUrl('/loginn');
    } else {
     alert(this.message)
    }

    //this.userService.forgotForm(this.forgotFormPayload).subscribe((data) => {
    //  this.router.navigateByUrl('/loginn');
    //}, error => {
    //  throwError(error);
    //})
  }

  gotoLoginForm() {
    this.router.navigateByUrl('/loginn');
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
