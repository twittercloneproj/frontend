import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TweetService } from '../../tweet.service';
import { TweetModel } from '../../tweet-model';
import { Router } from '@angular/router';
import { LikePayload } from 'src/app/vote-button/like-payload';
import { LikeService } from 'src/app/like.service';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { LikeResponse } from 'src/app/vote-button/like-response-payload';

@Component({
  selector: 'app-post-tileprofilebusiness',
  templateUrl: './post-tileprofilebusiness.component.html',
  styleUrls: ['./post-tileprofilebusiness.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostTileprofilebusinessComponent implements OnInit {

  @Input() tweets: TweetModel[];
  @Input() likes: LikeResponse[];
  likePayload: LikePayload;

  constructor(private likeService: LikeService, private router: Router, private tweetService: TweetService,
    private toastr: ToastrService) {
      this.tweetService.getAllTweets().subscribe(tweet => {
        this.tweets = tweet;
      })
      
     }

  ngOnInit(): void {
  }

  LikeTweet(id: number): void {
    this.router.navigateByUrl('/view-tweet/' + id);
  }
}
