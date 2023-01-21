import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { LikeService } from '../like.service';
import { TweetModel } from '../shared/tweet-model';
import { TweetService } from '../shared/tweet.service';
import { LikePayload } from '../vote-button/like-payload';
import { MatDialog } from '@angular/material/dialog';
import { DialogLikesComponent } from '../dialog-likes/dialog-likes.component';
import { LikeResponse } from '../vote-button/like-response-payload';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {

  @Input() tweet: TweetModel;
  likePayload: LikePayload;
  @Input() likes: LikeResponse[];
  likeLength: number;

  constructor(private likeService: LikeService, private router: Router, private tweetService: TweetService,
    private toastr: ToastrService, public dialog: MatDialog) {
      this.likePayload = {
        id: undefined
      }
     }

  ngOnInit(): void {
    this.loadLikes();
  }
  
  openDialog(){
    this.dialog.open(DialogLikesComponent, {data : {tweetId: this.tweet.id}});
  }

  loadLikes(){
    this.likeService.getLikes(this.tweet.id).subscribe(like => {
      this.likes = like;
    })
  }


  likeTweet() {
    this.likePayload.id = this.tweet.id;
    this.likeService.likeTweet(this.likePayload).subscribe(() => {}, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

  dislikeTweet() {
    this.likePayload.id = this.tweet.id;
    this.likeService.dislikeTweet(this.likePayload).subscribe(() => {}, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

  retweet() {
    this.likePayload.id = this.tweet.id;
    this.tweetService.retweet(this.likePayload).subscribe(() => {}, error => {
      this.toastr.error(error.error.message);
      throwError(error);
    });
  }

}
