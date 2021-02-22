import { Component, DoCheck, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements DoCheck {

  @Input() data: number = 0;

  @Output() onCounterChange: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngDoCheck():void {
    if(this.data <= 0){
      this.data = 0;
    }
  }

  add = (): void => {
    this.data = this.data + 1
    this.onCounterChange.emit(this.data)
  }

  subtract = (): void => {
    this.data = this.data - 1
    this.onCounterChange.emit(this.data)
  }

}
