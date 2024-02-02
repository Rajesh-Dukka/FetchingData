import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIservicesService {
  constructor(private http: HttpClient) {}
  fetchdata() {
    return this.http
      .get('https://fakestoreapi.com/products')
      .pipe(catchError(this.errorCatching));
  }
  errorCatching(err: HttpErrorResponse): any {
    return throwError(err.message);
  }
}
