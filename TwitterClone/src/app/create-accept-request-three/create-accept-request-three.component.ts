import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AcceptRequestPayload } from '../accept-requests/accept-request.payload';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-create-accept-request-three',
  templateUrl: './create-accept-request-three.component.html',
  styleUrls: ['./create-accept-request-three.component.css']
})
export class CreateAcceptRequestThreeComponent implements OnInit {

  createAcceptRequestForm: FormGroup;
  acceptRequestPayload: AcceptRequestPayload;

  constructor(private router: Router, private userService: UserService) {
    this.acceptRequestPayload = {
      approved: false
    }
  }

  ngOnInit() {
    this.createAcceptRequestForm = new FormGroup({
      //posted_by: new FormControl('', [Validators.required, forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      //approved: new FormControl(false, [Validators.required, forbiddenNamesValidator([/ or /i, /[=]/i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      approved: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$"), forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])])
    });
  }

  createAcceptRequest() {
  
    //this.acceptRequestPayload.approved = this.createAcceptRequestForm.get('approved')?.value;

    if (this.createAcceptRequestForm.get('approved')?.value === 'true') {
      this.acceptRequestPayload.approved = true;
    } else {
      this.acceptRequestPayload.approved = false;
    }

    if(this.createAcceptRequestForm.get('approved')?.value === 'true' || this.createAcceptRequestForm.get('approved')?.value === 'false') {
      this.userService.createAcceptRequestThree(this.acceptRequestPayload).subscribe((data) => {
        this.router.navigateByUrl('/all');
      }, error => {
        throwError(error);
      })
    } else {
      alert("Error. There are just 2 values: true or false")
    }

    //this.userService.createAcceptRequest(this.acceptRequestPayload).subscribe((data) => {
    //  this.router.navigateByUrl('/all');
    //}, error => {
    //  throwError(error);
    //})
  }

  discardRequest() {
    this.router.navigateByUrl('/all');
  }

}

export function forbiddenNamesValidator(forbiddenNames: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenNames.some(re => re.test(control.value));
      return forbidden ? { 'forbiddenNames': {value: control.value} } : null;
  };
}
