import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-components',
  templateUrl: './nested-components.component.html',
  styleUrls: ['./nested-components.component.css']
})
export class NestedComponentsComponent implements OnInit {

  counter: number = 10;
  name: string = '';
  lastname: string = '';
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  counterChange = (counter: number) => {
    console.log('counterChange: ', counter)
    this.counter = counter;
  }

  newName = (name: string) => {
    this.name = name;
  }

  newLastname = (lastname: string) => {
    this.lastname = lastname;
  }

  newActive = (active: boolean) => {
    this.active = active;
  }
}
