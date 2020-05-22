import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Delegation } from './Delegation';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DelegationService {

  rootUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getAllDelegations(): Observable<Delegation[]>{
      return this.http.get<Delegation[]>(this.rootUrl + "/getAllDelegations")
      .pipe(
        catchError(this.handleError)
      );
  }
  public getAllDelegationsOrderByDateStartDesc(): Observable<Delegation[]>{
    return this.http.get<Delegation[]>(this.rootUrl + "/getAllDelegationsOrderByDateStartDesc")
    .pipe(
      catchError(this.handleError)
    );
  }
  public getAllDelByUserOrderByDateStartDesc(userId: number): Observable<Delegation[]>{
    const params = new HttpParams();
    params.set("userId", userId.toString());
    return this.http.get<Delegation[]>(this.rootUrl + "/getAllDelByUserOrderByDateStartDesc", {params: params})
    .pipe(
      catchError(this.handleError)
    );
  }




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
