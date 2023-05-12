import { Component, OnInit } from '@angular/core';
import { User } from './entity/User';
import { HttpClient } from '@angular/common/http';
import { ApiUsersService } from './services/api-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private readonly userService: ApiUsersService
  ) {}
  title = 'test-technique';
  nombre_enfants: number = 0;
  public listUsers: User[] = [];
  sideBar = {
    user: new User(0, '', '', ''),
    display: false,
  };
  ngOnInit(): void {}

  toggleDisplay(user: User) {
    this.sideBar.display = true;
    this.sideBar.user = user;
  }
  handleSubmit(user: User) {
    this.userService.editUser(user, this.listUsers);
    this.SaveListUsersInJson();
  }
  numberChange(user: User) {
    this.userService.editUser(user, this.listUsers);
    this.nombre_enfants = user.nombre_enfants;
    this.SaveListUsersInJson();
  }
  deleteMain(id) {
    this.listUsers = [...this.userService.removeUser(id, this.listUsers)];
    this.SaveListUsersInJson();
  }
  ajoutUser() {
    const usr = new User(this.listUsers.length + 1, ' ', ' ', 0);
    this.listUsers = [...this.userService.addUser(usr, this.listUsers)];
    this.SaveListUsersInJson();
  }
  /*
   * @ToDo
   * */
  LoadListUsersFromJson() {
    this.listUsers = [...this.userService.loadList()];
  }

  /*
   * @ToDo
   * */
  SaveListUsersInJson() {
    this.userService.saveList(this.listUsers);
  }
}
