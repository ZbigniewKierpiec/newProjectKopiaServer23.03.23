import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../components/User/user';
import { Users } from '../components/User/users';

@Injectable({
  providedIn: 'root',
})
export class TestowyService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  getUserName(): Observable<any[]> {
    return this.getUsers().pipe(
      map((user) => user.filter((user) => user.name))
    );
  }

  getUserId(): Observable<any[]> {
    return this.getUsers().pipe(
      map((user) => user.filter((user) => user.id === 2))
    );
  }
}
