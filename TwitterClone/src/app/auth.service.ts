import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TweetModel } from './shared/tweet-model';
import { UserModel } from './shared/user-model';
import { Observable, throwError } from 'rxjs';
//import { LocalStorageService } from 'ngx-webstorage';
import { LoginRequestPayload } from './twitter-login/login-request.payload';
import { LoginResponse } from './twitter-login/login-response.payload';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  // @Output() username: EventEmitter<string> = new EventEmitter();

  // refreshTokenPayload = {
  //   refreshToken: this.getRefreshToken(),
  //   username: this.getUserName()
  // }

  constructor(private http: HttpClient) { }

  getAllTweets(): Observable<Array<TweetModel>> {
    return this.http.get<Array<TweetModel>>('https://localhost:8000/api/tweets/all');
  }

  getUser(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>('https://localhost:8000/api/profile/about/pera');
  }

  // login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
  //   return this.http.post<LoginResponse>('http://localhost:8080/api/auth/users/login',
  //     loginRequestPayload).pipe(map(data => {
  //       this.localStorage.store('authenticationToken', data.authenticationToken);
  //       this.localStorage.store('username', data.username);
  //       this.localStorage.store('refreshToken', data.refreshToken);
  //       this.localStorage.store('expiresAt', data.expiresAt);

  //       this.loggedIn.emit(true);
  //       this.username.emit(data.username);
  //       return true;
  //     }));
  // }

  // getJwtToken() {
  //   return this.localStorage.retrieve('authenticationToken');
  // }

  // refreshToken() {
  //   return this.http.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token',
  //     this.refreshTokenPayload)
  //     .pipe(tap(response => {
  //       this.localStorage.clear('authenticationToken');
  //       this.localStorage.clear('expiresAt');

  //       this.localStorage.store('authenticationToken',
  //         response.authenticationToken);
  //       this.localStorage.store('expiresAt', response.expiresAt);
  //     }));
  // }

  // logout() {
  //   this.http.post('http://localhost:8080/api/auth/users/logout', this.refreshTokenPayload,
  //     { responseType: 'text' })
  //     .subscribe(data => {
  //       console.log(data);
  //     }, error => {
  //       throwError(error);
  //     })
  //   this.localStorage.clear('authenticationToken');
  //   this.localStorage.clear('username');
  //   this.localStorage.clear('refreshToken');
  //   this.localStorage.clear('expiresAt');
  // }

  // getUserName() {
  //   return this.localStorage.retrieve('username');
  // }
  // getRefreshToken() {
  //   return this.localStorage.retrieve('refreshToken');
  // }

  // isLoggedIn(): boolean {
  //   return this.getJwtToken() != null;
  // }
}
