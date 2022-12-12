import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TweetModel } from './shared/tweet-model';
import { UserModel } from './shared/user-model';
import { Observable, throwError } from 'rxjs';
//import { LocalStorageService } from 'ngx-webstorage';
import { LoginRequestPayload } from './twitter-login/login-request.payload';
import { LoginResponse } from './twitter-login/login-response.payload';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) { }

  getAllTweets(): Observable<Array<TweetModel>> {
    return this.http.get<Array<TweetModel>>('https://localhost:8000/api/tweets/all');
  }

  getUser(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>('https://localhost:8000/api/profile/about/pera');
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<any>{
    const loginHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post<string>('https://localhost:8000/api/auth/users/login', JSON.stringify(loginRequestPayload),{headers:loginHeaders})
    .pipe(map((res) => {
      console.log('Login success');
      localStorage.setItem("jwt", res)
    }));
  }

 
  logout() {
    localStorage.removeItem('jwt')
    this.router.navigateByUrl('/home');
  }

  tokenIsPresent(): Boolean {
    let token = this.getToken()
    return token != null;
  }

  getToken() {
    let token = localStorage.getItem('jwt');
    return token
  }

  getUsername(): string {
    let token = this.parseToken();

    if (token) {
      return this.parseToken()['username']
    }
    return "";
  }
  getRole(): string {
    let token = this.parseToken();

    if (token) {
      return this.parseToken()['role']
    }
    return "";
  }
  getExpiration(): string {
    let token = this.parseToken();

    if (token) {
      return this.parseToken()['exp']
    }
    return "";
  }

  private parseToken() {
    let jwt = localStorage.getItem('jwt');
    if (jwt !== null) {
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      return decodedJwtData;
    }
  }

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
