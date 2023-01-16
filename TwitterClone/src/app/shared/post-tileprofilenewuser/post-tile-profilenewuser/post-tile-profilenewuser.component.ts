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
  selector: 'app-post-tile-profilenewuser',
  templateUrl: './post-tile-profilenewuser.component.html',
  styleUrls: ['./post-tile-profilenewuser.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostTileProfilenewuserComponent implements OnInit {

  @Input() tweets: TweetModel[];
  @Input() likes: LikeResponse[];
  likePayload: LikePayload;

  constructor(private likeService: LikeService, private router: Router, private tweetService: TweetService,
    private toastr: ToastrService) {
      this.tweetService.getUserTweets().subscribe(tweet => {
        this.tweets = tweet;
      })
      
     }

  ngOnInit(): void {
  }

  LikeTweet(id: number): void {
    this.router.navigateByUrl('/view-tweet/' + id);
  }

}
