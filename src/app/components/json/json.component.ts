import { Component, OnInit } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../User/user';
import { roomsModel, Users } from '../User/users';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss'],
})
export class JsonComponent implements OnInit {
  constructor(private Users: UsersService) {}
  isActive: boolean;
  select: any;
  use:Observable<User[]>;
  usersActive: Observable<any[]>;
  userOptionDevice: Observable<any[]>;
  checkUser(item: any) {
    this.isActive = item.name;


    
    this.usersActive = this.Users.getUsers().pipe(
      map((user) => user.filter((e) => e.id === item.id))
    );

    console.log(this.userOptionDevice);
  }

  selectOptions(item: any) {
    console.log(this.userOptionDevice);
  }

  ngOnInit(): void {
    console.log(this.use);

this.use= this.Users.getUsers();


  }
}
