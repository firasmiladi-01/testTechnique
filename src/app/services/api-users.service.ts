import { Injectable } from '@angular/core';
import { User } from '../entity/User';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor() {}

  public getUserById(id: number, users: User[]) {
    return users.find((item) => {
      return item.id === id;
    });
  }
  public addUser(user: User, users: User[]) {
    const usr = new User(uuidv4(), user.nom, user.prenom, user.nombre_enfants);
    users.push(usr);
    return users;
  }
  public removeUser(id, users: User[]) {
    users = users.filter((item) => item.id !== id);
    return users;
  }
  public editUser(user: User, users) {
    const usr = this.getUserById(user.id, users);
    usr.nom = user.nom;
    usr.prenom = user.prenom;
    usr.nombre_enfants = user.nombre_enfants;
  }
}
