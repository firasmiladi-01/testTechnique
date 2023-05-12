import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Output() userChange = new EventEmitter();
  @Output() deleteUser = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  delete(id) {
    this.deleteUser.emit(id);
  }
  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.userChange.emit({
      ...this.user,
      nombre_enfants: parseInt(inputValue, 10),
    });
  }
}
