import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  isbutton = false;
  employee: { id; name; city; email } = {
    id: null,
    name: '',
    city: '',
    email: '',
  };

  users: any = [];
  constructor(private userservice: UserService) {}

  ngOnInit(): void {}

  getUser() {
    this.userservice.getData().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
  onSubmit(formObject) {
    //console.log(formObject.value);
    this.users.push(formObject.value);
  }
}
