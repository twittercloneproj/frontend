import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TweetService } from 'src/app/shared/tweet.service';
import { throwError } from 'rxjs';
import { CreateTweetPayload } from './create-tweet.payload';

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
      text: '',
      user: ''
    }
  }

  ngOnInit() {
    this.createTweetForm = new FormGroup({
      text: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required)
    });
  }

  createTweet() {
    this.tweetPayload.text = this.createTweetForm.get('text')?.value;
    this.tweetPayload.user = this.createTweetForm.get('user')?.value;

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
