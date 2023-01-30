import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { UserService } from '../shared/user.service';
import { ChangePrivacyPayload } from './change-privacy.payload';

@Component({
  selector: 'app-change-privacy',
  templateUrl: './change-privacy.component.html',
  styleUrls: ['./change-privacy.component.css']
})

export class ChangePrivacyComponent implements OnInit {

  login = 'login';
  public message = 'Privacy has only two values: Public or Private';

  token: string|undefined;

  changePrivacyPayload: ChangePrivacyPayload;
  changePrivacyForm: FormGroup;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) {
    this.token = undefined;
    this.changePrivacyPayload = {
      privacy: ''
    };
   }

  ngOnInit(): void {
    this.changePrivacyForm = new FormGroup({
      privacy: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
    });
  }

  changePrivacy() {
    this.changePrivacyPayload.privacy = this.changePrivacyForm.get('privacy')?.value;

    if(this.changePrivacyForm.get('privacy')?.value === 'Private' || this.changePrivacyForm.get('privacy')?.value === 'Public') {
      this.userService.changePrivacy(this.changePrivacyPayload).subscribe((data) => {
        this.router.navigateByUrl('/all');
      }, error => {
        throwError(error);
      })
    } else {
      alert(this.message)
    }
  }

  info() {
    alert("'Privacy has only two values: public or private'");
  }

}

export function forbiddenNamesValidator(forbiddenNames: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenNames.some(re => re.test(control.value));
      return forbidden ? { 'forbiddenNames': {value: control.value} } : null;
  };
}
