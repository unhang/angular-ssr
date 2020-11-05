import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  END_POINT = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  signin(form: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    return this.http
      .post<any>(this.END_POINT + '/signin', form, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        observe: 'response',
        responseType: 'json',
      })
      .pipe(map((res) => res));
  }

  getProfile(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.END_POINT}/profile`);
  }

  clearCookie() {
    return this.http.delete(`${this.END_POINT}/clearCookie`, {
      observe: 'response',
    });
  }
}
