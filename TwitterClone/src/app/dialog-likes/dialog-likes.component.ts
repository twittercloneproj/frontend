import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LikeService } from '../like.service';
import { LikeResponse } from '../vote-button/like-response-payload';

@Component({
  selector: 'app-dialog-likes',
  templateUrl: './dialog-likes.component.html',
  styleUrls: ['./dialog-likes.component.css']
})

export class DialogLikesComponent {
  @Input() likes: LikeResponse[];
  likeLength: number;

  constructor(private likeService: LikeService, @Inject(MAT_DIALOG_DATA)public data: any){}

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes(){
    this.likeService.getLikes(this.data.tweetId).subscribe(like => {
      this.likes = like;
    })
  }

}
