import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  public employees = [
    {"empId": 101, "name": "mark","gender": "Male", "salary": 5000, "dateOfBirth": "12/12/2002"},
    {"empId": 102, "name": "paul","gender": "Male", "salary": 6000, "dateOfBirth": "12/24/2002"},
    {"empId": 103, "name": "watson","gender": "Male", "salary": 7000, "dateOfBirth": "06/09/2002"},
    {"empId": 104, "name": "Stacy","gender": "Female", "salary": 8000, "dateOfBirth": "01/30/2002"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
