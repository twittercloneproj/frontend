import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user-model';
import { Observable } from 'rxjs';
import { TwitterRegisterPayload } from '../twitter-register/twitter-register.payload';
import { TwitterRegisterBusinessPayload } from '../twitter-register-business/twitter-register-business.payload';
import { ForgotFormPayload } from '../forgot-form/forgot-form.payload';
import { ProfileModel } from './profile-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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
}
