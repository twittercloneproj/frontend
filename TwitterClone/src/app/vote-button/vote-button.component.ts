import { Component, OnInit, Input } from '@angular/core';
import { TweetModel } from '../shared/tweet-model';
//import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { VotePayload } from './vote-payload';
import { VoteType } from './vote-type';
import { VoteService } from '../shared/vote.service';
import { AuthService } from '../auth.service';
import { TweetService } from '../shared/tweet.service';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() tweet: TweetModel;
  votePayload: VotePayload;
  //faArrowUp = faArrowUp;
  //faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(private voteService: VoteService,
    private authService: AuthService,
    private tweetService: TweetService, private toastr: ToastrService) {

      this.votePayload = {
        voteType: undefined,
        tweetId: undefined
      }
      //this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    }

    ngOnInit(): void {
      this.updateVoteDetails();
    }
  
    upvotePost() {
      this.votePayload.voteType = VoteType.UPVOTE;
      this.vote();
      this.downvoteColor = '';
    }
  
    downvotePost() {
      this.votePayload.voteType = VoteType.DOWNVOTE;
      this.vote();
      this.upvoteColor = '';
    }
  
    private vote() {
      this.votePayload.tweetId = this.tweet.id;
      this.voteService.vote(this.votePayload).subscribe(() => {
        this.updateVoteDetails();
      }, error => {
        this.toastr.error(error.error.message);
        throwError(error);
      });
    }
  
    private updateVoteDetails() {
      this.tweetService.getTweet(this.tweet.id).subscribe(tweet => {
        this.tweet = tweet;
      });
    }

}
