import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TweetModel } from './tweet-model';
import { Observable } from 'rxjs';
import { CreateTweetPayload } from '../post/create-post/create-tweet.payload';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  token;
  text = ""
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllTweets(): Observable<Array<TweetModel>> {
    return this.http.get<Array<TweetModel>>('https://localhost:8000/api/tweets/all');
  }

  getTweetsHomeFeed(): Observable<Array<TweetModel>> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<Array<TweetModel>>(`https://localhost:8000/api/tweets/home`, options);
  }

  getUserTweets(): Observable<Array<TweetModel>> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<Array<TweetModel>>(`https://localhost:8000/api/tweets/about/${this.auth.getUsername()}`);
  }

  createTweet(tweetPayload: CreateTweetPayload): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post('https://localhost:8000/api/tweets/tweets', tweetPayload , options);
  }

  getTweet(id: number): Observable<TweetModel> {
    return this.http.get<TweetModel>('https://localhost:8080/api/tweets/' + id);
  }

  getAllTweetsByUser(name: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>('https://localhost:8080/api/tweets/by-user/' + name);
  }
}
