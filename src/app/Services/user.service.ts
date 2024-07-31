import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private userCache: { [key: number]: any } = {};
  private usersCache: { [key: number]: any } = {};

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    if (this.usersCache[page]) {
      return of(this.usersCache[page]);
    }
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      tap(data => this.usersCache[page] = data),
      catchError(this.handleError('getUsers', {}))
    );
  }

  getUserById(id: number): Observable<any> {
    if (this.userCache[id]) {
      return of(this.userCache[id]);
    }
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(data => this.userCache[id] = data),
      catchError(this.handleError('getUserById', null))
    );
  }

  private handleError(operation: string, result: any) {
    return (error: any): Observable<any> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }
}
