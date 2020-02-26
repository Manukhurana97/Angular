import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
    `
    `
  ]
})
export class TestComponent implements OnInit {

  names = ["Mark", "Smith", "Paul", "Watson"]

  employees = [
    {"empId":"1", "empName": "Mark", "age": 20 },
    {"empId":"2", "empName": "Paul", "age": 30 },
    {"empId":"3", "empName": "Watson", "age": 40 },
    {"empId":"4", "empName": "Stacy", "age": 60 }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
