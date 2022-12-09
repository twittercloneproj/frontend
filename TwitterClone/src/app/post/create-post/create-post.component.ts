import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TweetService } from 'src/app/shared/tweet.service';
import { throwError } from 'rxjs';
import { CreateTweetPayload } from './create-tweet.payload';
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createTweetForm: FormGroup;
  tweetPayload: CreateTweetPayload;

  constructor(private router: Router, private tweetService: TweetService) {
    this.tweetPayload = {
      posted_by: '',
      text: ''
    }
  }

  ngOnInit() {
    this.createTweetForm = new FormGroup({
      posted_by: new FormControl('', [Validators.required, forbiddenNamesValidator([/ or /i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])]),
      text: new FormControl('', [Validators.required, forbiddenNamesValidator([/ or /i, /[=]/i, / <script> /i, /<script>/i, / > /i, />/i, / >/i, /> /i, / < /i, /</i, / </i, /< /i])])
    });
  }

  createTweet() {
    this.tweetPayload.posted_by = this.createTweetForm.get('posted_by')?.value;
    this.tweetPayload.text = this.createTweetForm.get('text')?.value;

    this.tweetService.createTweet(this.tweetPayload).subscribe((data) => {
      this.router.navigateByUrl('/all');
    }, error => {
      throwError(error);
    })
  }

  discardTweet() {
    this.router.navigateByUrl('/all');
  }

}
export function forbiddenNamesValidator(forbiddenNames: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = forbiddenNames.some(re => re.test(control.value));
      return forbidden ? { 'forbiddenNames': {value: control.value} } : null;
  };
}
