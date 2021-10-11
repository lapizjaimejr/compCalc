import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fNum: any;
  sNum: any;
  operation = "";

  
  getOperand1(oprnd1: string) {
    this.fNum = oprnd1;
    console.log(this.fNum);
  }

  getOperand2(oprnd2: string) {
    this.sNum = oprnd2;
    console.log(this.sNum);
  }
  
  getOperation(opChoice: string) {
    this.operation = opChoice;
    console.log(this.operation);
  }

  

  constructor() { }
  
  ngOnInit(): void {
  }
}


