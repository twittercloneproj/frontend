import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TweetModel } from './tweet-model';
import { Observable } from 'rxjs';
import { CreateTweetPayload } from '../post/create-post/create-tweet.payload';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  getAllTweets(): Observable<Array<TweetModel>> {
    return this.http.get<Array<TweetModel>>('http://localhost:8080/all');
  }

  createTweet(tweetPayload: CreateTweetPayload): Observable<any> {
    return this.http.post('http://localhost:8080/tweets', tweetPayload);
  }
}
