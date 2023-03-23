import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-json2',
  templateUrl: './json2.component.html',
  styleUrls: ['./json2.component.scss'],
})
export class Json2Component implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private Users: UsersService) {}
  isActive: boolean;
  use: Observable<any[]>;
  usersActive: Observable<any[]>;

  checkUser(item: any) {
    this.isActive = item.name;

    this.usersActive = this.Users.getUsers().pipe(
      map((user) => user.filter((e) => e.id === item.id))
    );
  }

  log() {
    console.log(this.username, this.password);

    this.usersActive = this.Users.getUsers().pipe(
      map((user) => user.filter((e) => (e.username === this.username ? e : '')))
    );

    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.use = this.Users.getUsers();
  }
}
