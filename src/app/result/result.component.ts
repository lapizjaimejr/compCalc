import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() opChosen = "";
  @Input() firstNum: any;
  @Input() secNum: any;
  results: any;

  ngOnChanges(changes: SimpleChange) {

    switch(this.opChosen) {
        case "+": 
            if (!isNaN(this.firstNum) && !isNaN(this.secNum)) {
              this.results = parseFloat(this.firstNum) + parseFloat(this.secNum);
            }
          break;
        case "-": 
            if (!isNaN(this.firstNum) && !isNaN(this.secNum)) {
              this.results = parseFloat(this.firstNum) - parseFloat(this.secNum);
            }
          break;
        case "*": 
            if (!isNaN(this.firstNum) && !isNaN(this.secNum)) {
              this.results = parseFloat(this.firstNum) * parseFloat(this.secNum);
            }
          break;
        case "/": 
            if (!isNaN(this.firstNum) && !isNaN(this.secNum)) {
              if (this.secNum == '0')
                  this.results = "undefined";
              else {
                this.results = parseFloat(this.firstNum) / parseFloat(this.secNum);
              }
            }
          break;
    }
    
    if (this.results == 0)
      this.results = '0';
  }



  constructor() { }
  
  ngOnInit(): void {
  }

}
