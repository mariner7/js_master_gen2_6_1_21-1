import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: string;
  lastname: string;
  active: boolean = false;

  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onLastnameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  nameChanged = () => {
    this.onNameChange.emit(this.name)
  }

  lastnameChanged = () => {
    this.onLastnameChange.emit(this.lastname)
  }

  activeChanged = () => {
    this.onActiveChange.emit(this.active)
  }

}
