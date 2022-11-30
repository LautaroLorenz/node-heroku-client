import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { MenuOption } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HerokuService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMenuOptions$(): Observable<MenuOption[]> {
    console.log('getMenuOptions$')
    return this.http
      .get<MenuOption[]>(`${environment.server.heroku}/menu-options`)
      .pipe(
        tap((response) => console.log({response})),
        catchError(this.handleError<MenuOption[]>('getMenuOptions', [{ value: 'error de menu'}]))
      );
  }
}
