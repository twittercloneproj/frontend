import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LikePayload } from './vote-button/like-payload';
import { LikeResponse } from './vote-button/like-response-payload';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  token;
  constructor(private http: HttpClient, private auth: AuthService) { }

  likeTweet(likePayload: LikePayload): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post('https://localhost:8000/api/tweets/like/' + likePayload.id, likePayload, options);
  }

  dislikeTweet(likePayload: LikePayload): Observable<any> {
    this.token = 'Bearer ' + this.auth.getToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token });
  let options = { headers: headers };
    return this.http.post('https://localhost:8000/api/tweets/unlike/' + likePayload.id, likePayload, options);
  }

  getLikes(id: number): Observable<LikeResponse[]> {
    return this.http.get<LikeResponse[]>('https://localhost:8000/api/tweets/likes/' + id);
  }
}
