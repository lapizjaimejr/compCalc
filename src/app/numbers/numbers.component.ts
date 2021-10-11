import { Component, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Output() firstOprnd = new EventEmitter<string>();
  @Output() secOprnd = new EventEmitter<string>();


  getFirst(value: string) {
    this.firstOprnd.emit(value);
  }

  getSecond(value: string) {
    this.secOprnd.emit(value);
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
