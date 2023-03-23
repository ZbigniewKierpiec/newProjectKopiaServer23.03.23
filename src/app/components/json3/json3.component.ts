import { find, map, Observable } from 'rxjs';
import { TestowyService } from './../../services/testowy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json3',
  templateUrl: './json3.component.html',
  styleUrls: ['./json3.component.scss'],
})
export class Json3Component implements OnInit {
  constructor(private test: TestowyService) {}

  users: Observable<any[]>;
  usersActive: Observable<any[]>;
  usersActiveDevices: Observable<any[]>;
  id: number;
  name: string;
  age: number;
  image: string;
  isSelected;
  valueID: number = 0;
  select() {
    this.usersActiveDevices = this.usersActive.pipe(
                  
    )
  }

  userShow(item) {
    this.id = item.id;
    this.name = item.name;
    this.age = item.age;
    this.image = item.image;
    this.isSelected = item.name;
    console.log(item);

    this.usersActive = this.test
      .getUsers()
      .pipe(map((user) => user.filter((e) => e.id === item.id)));
  }

  ngOnInit(): void {
    this.users = this.test.getUsers();
  }
}
