import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css'],
})
export class ConfigSideBarComponent implements OnInit {
  @Input() user: User;
  @Input() nombre_enfants: number;
  @Output() handleSubmit = new EventEmitter();
  prenom: string;
  nom: string;
  constructor() {}
  onSubmit(event) {
    event.preventDefault();
    this.handleSubmit.emit(
      new User(this.user.id, this.nom, this.prenom, this.nombre_enfants)
    );
  }
  ngOnInit(): void {
    this.prenom = this.user.prenom;
    this.nom = this.user.nom;
    this.nombre_enfants = this.user.nombre_enfants;
  }
  ngOnChanges(): void {
    this.prenom = this.user.prenom;
    this.nom = this.user.nom;
    this.nombre_enfants = this.user.nombre_enfants;
  }
}
