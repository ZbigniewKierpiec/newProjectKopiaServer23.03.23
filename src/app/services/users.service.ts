import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { Observable, map } from 'rxjs';
import { User } from '../components/User/user';
import { Users } from '../components/User/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  osUserSend = new EventEmitter<{ name: string; id: number }>();

  setActiveUser(user: { name: string; id: number }) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  getUserName(): Observable<User[]> {
    return this.getUsers().pipe(
      map((user) => user.filter((user) => user.name))
    );
  }



  getUserId(): Observable<User[]> {
    return this.getUsers().pipe(
      map((user) => user.filter((user) => user.id ===2))
    );
  }






  

}
