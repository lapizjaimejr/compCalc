import { Component, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() opChoice = new EventEmitter<string>();

    selectOp (value: string) {
      this.opChoice.emit(value);
    }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
