import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './user-model';
import { Observable } from 'rxjs';
import { TwitterRegisterPayload } from '../twitter-register/twitter-register.payload';
import { TwitterRegisterBusinessPayload } from '../twitter-register-business/twitter-register-business.payload';
import { ForgotFormPayload } from '../forgot-form/forgot-form.payload';
import { ProfileModel } from './profile-model';
import { ProfileModelBusiness } from './profile-modelbusiness';
import { ChangePrivacyPayload } from '../change-privacy/change-privacy.payload';
import { AuthService } from '../auth.service';
import { BaseRouteReuseStrategy } from '@angular/router';
import { AcceptRequestPayload } from '../accept-requests/accept-request.payload';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token;
  text = ""

  constructor(private http: HttpClient, private auth: AuthService) { }

  signup(registerPayload: TwitterRegisterPayload): Observable<any> {
    return this.http.post('https://localhost:8000/api/auth/users/add', registerPayload);
  }

  signupBusiness(registerBusinessPayload: TwitterRegisterBusinessPayload): Observable<any> {
    return this.http.post('https://localhost:8000/api/auth/users/add', registerBusinessPayload);
  }

  forgotForm(forgotFormPayload: ForgotFormPayload): Observable<any> {
    return this.http.post('https://localhost:8000/api/auth/users/add', forgotFormPayload);
  }

  getAllUsers(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>('https://localhost:8000/api/auth/users/all');
  }

  getUser(): Observable<Array<ProfileModel>> {
    return this.http.get<Array<ProfileModel>>('https://localhost:8000/api/profile/about/pera');
  }

  getUserBusiness(): Observable<Array<ProfileModelBusiness>> {
    return this.http.get<Array<ProfileModelBusiness>>('https://localhost:8000/api/profile/about/zoran');
  }

  getNewUser(): Observable<UserModel> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<UserModel>(`https://localhost:8000/api/profile/about/${this.auth.getUsername()}`, options);
  }

  getMyFollowers(): Observable<Array<UserModel>> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<Array<UserModel>>(`https://localhost:8000/api/social-graph/followers/${this.auth.getUsername()}`, options);
  }

  getPeopleIFollow(): Observable<Array<UserModel>> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<Array<UserModel>>(`https://localhost:8000/api/social-graph/${this.auth.getUsername()}/following`, options);
  }

  changePrivacy(changePrivacyPayload: ChangePrivacyPayload): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.post('https://localhost:8000/api/profile/change-privacy', changePrivacyPayload, options);
  }

  getAllRequests(): Observable<Array<UserModel>> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<Array<UserModel>>('https://localhost:8000/api/social-graph/requests', options)
  }

  getMySuggestions(): Observable<Array<UserModel>> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<Array<UserModel>>('https://localhost:8000/api/social-graph/suggestions', options)
  }

  createFollowGraBaza5(): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post(`https://localhost:8000/api/social-graph/follow/grafbaza5`, {}, options);
  }

  createFollowObican123(): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post<any>(`https://localhost:8000/api/social-graph/follow/obican123`, {},  options);
  }

  createFollowBiznis123(): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post<any>(`https://localhost:8000/api/social-graph/follow/biznis123`, {}, options);
  }

  createFollowObican1234(): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post<any>(`https://localhost:8000/api/social-graph/follow/obican1234`, {}, options);
  }

  createUnfollowGrafBaza5(): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post<any>(`https://localhost:8000/api/social-graph/unfollow/grafbaza5`, {}, options);
  }

  createAcceptRequest(acceptRequestPayload: AcceptRequestPayload): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post(`https://localhost:8000/api/social-graph/request/obican1234`, acceptRequestPayload, options);
  }

}
