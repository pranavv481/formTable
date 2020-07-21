import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../utils/constants';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = Constant.key;
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.API_URL);
  }
  // public createUser(user): Observable<any> {
  //   return this.http.post(Constant.url + "users", user)
  // }
}
