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
    return this.http.get<Array<TweetModel>>('https://localhost:8000/api/tweets/all');
  }

  createTweet(tweetPayload: CreateTweetPayload): Observable<any> {
    return this.http.post('https://localhost:8000/api/tweets/tweets', tweetPayload);
  }

  getTweet(id: number): Observable<TweetModel> {
    return this.http.get<TweetModel>('https://localhost:8080/api/tweets/' + id);
  }

  getAllTweetsByUser(name: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>('https://localhost:8080/api/tweets/by-user/' + name);
  }
}
