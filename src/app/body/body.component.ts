import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  Employees = [];

  name = 'Manu';
  isdisable = false;
  haserror = false;
  special = {
    color: 'Red',
    fontStyle : 'Italic'
  };
  day = 6;
  arr = ['one', 'two', 'three', 'four', 'five'];


  constructor() {
    this.Employees = [
      {empid: 1, Name: 'Manu', email: 'manukhurana@gmail.com'},
      {empid: 2, Name: 'abc', email: 'abc@gmail.com'},
      {empid: 3, Name: 'def', email: 'def@gmail.com'}
    ];
  }

  onbuttonclick() {
    this.Employees = [
      {empid: 1, Name: 'Manu', email: 'manukhurana@gmail.com'},
      {empid: 2, Name: 'abc', email: 'abc@gmail.com'},
      {empid: 3, Name: 'def', email: 'def@gmail.com'},
      {empid: 4, Name: 'fgh', email: 'fgh@gmail.com'},
      {empid: 5, Name: 'ijk', email: 'ijk@gmail.com'}
    ];
  }

  trackByEmpId(Employee, index) {
    return Employee.eId;
  }

  onclick() {
    console.log('button clicked');
  }

  ngOnInit(): void {
  }
}
