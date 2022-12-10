import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TweetModel } from './shared/tweet-model';
import { UserModel } from './shared/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllTweets(): Observable<Array<TweetModel>> {
    return this.http.get<Array<TweetModel>>('https://localhost:8000/api/tweets/all');
  }

  getUser(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>('https://localhost:8000/api/profile/about/pera');
  }
}
