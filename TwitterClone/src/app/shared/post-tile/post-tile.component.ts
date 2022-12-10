import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TweetService } from '../tweet.service';
import { TweetModel } from '../tweet-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTileComponent implements OnInit {

  @Input() tweets: TweetModel[];

  constructor(private router: Router, private tweetService: TweetService) { }

  ngOnInit(): void {
  }

  LikeTweet(id: number): void {
    this.router.navigateByUrl('/view-tweet/' + id);
  }

}
