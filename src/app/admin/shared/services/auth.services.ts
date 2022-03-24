import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FbAuthResponse } from 'src/environments/interface';

@Injectable()
export class AuthServices {
  constructor(private http: HttpClient) {}

  get token(): string {
    return '';
  }

  login(user: User): Observable<FbAuthResponse> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {}

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: any) { // type????
    console.log(response);
  }
}