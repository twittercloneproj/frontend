import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user-model';
import { Observable } from 'rxjs';
import { TwitterRegisterPayload } from '../twitter-register/twitter-register.payload';
import { TwitterRegisterBusinessPayload } from '../twitter-register-business/twitter-register-business.payload';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(registerPayload: TwitterRegisterPayload): Observable<any> {
    return this.http.post('https://localhost:8003/users/add', registerPayload);
  }

  signupBusiness(registerBusinessPayload: TwitterRegisterBusinessPayload): Observable<any> {
    return this.http.post('https://localhost:8003/users/add', registerBusinessPayload);
  }
}
