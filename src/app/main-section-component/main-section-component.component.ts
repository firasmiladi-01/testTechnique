import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../entity/User';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-section-component',
  templateUrl: './main-section-component.component.html',
  styleUrls: ['./main-section-component.component.css'],
})
export class MainSectionComponentComponent implements OnInit {
  @Input() users: User[];
  @Output() load = new EventEmitter();
  @Output() toggleDisplay = new EventEmitter();
  @Output() numberChange = new EventEmitter();
  @Output() deleteMain = new EventEmitter();
  @Output() ajoutUser = new EventEmitter();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  trackByFn(index: number, item: any): number {
    return item.id;
  }
  loadSideBar() {}
  userDetails(user: User) {
    this.toggleDisplay.emit(user);
  }
  update(): void {
    this.load.emit();
  }
  deleteUser(id) {
    this.deleteMain.emit(id);
  }
  nombreChange(user: User) {
    this.numberChange.emit(user);
  }
  addUser() {
    this.ajoutUser.emit();
  }
}
