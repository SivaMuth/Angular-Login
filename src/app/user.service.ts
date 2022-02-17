import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData, TokenData, UserData } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(userData: UserData): Observable<UserData> {
    return this.http.post<UserData>(
      'https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata',
      userData
    );
  }

  userData(): Observable<Array<UserData>> {
    return this.http.get<Array<UserData>>(
      'https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata',
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem('app_token') || '',
        }),
      }
    );
  }

  userById(id: String): Observable<UserData> {
    return this.http.get<UserData>(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata/${id}`
    );
  }

  updateUserById(id: String, userData: UserData): Observable<UserData> {
    return this.http.put<UserData>(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata/${id}`,
      userData
    );
  }

  deleteUserById(id: String): Observable<UserData> {
    return this.http.delete<UserData>(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/userdata/${id}`
    );
  }

  login(data: LoginData): Observable<TokenData> {
    return this.http.post<TokenData>('http://localhost:4200/login', data);
  }
}
