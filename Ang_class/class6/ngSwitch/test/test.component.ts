import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
    <div [ngSwitch]="number">

    <h1 *ngSwitchCase="'one'">1</h1>
    <h1 *ngSwitchCase="'two'">2</h1>
    <h1 *ngSwitchCase="'three'">3</h1>
    <h1 *ngSwitchDefault>Not in the list</h1>
    </div>


    <div [ngSwitch]="number2">

    <h1 *ngSwitchCase="1">One</h1>
    <h1 *ngSwitchCase="2">Two</h1>
    <h1 *ngSwitchCase="3">Three</h1>
    <h1 *ngSwitchDefault>Not in the list</h1>
    </div>
  
  
  `,
  styles: [
    `
    `
  ]
})
export class TestComponent implements OnInit {

  number = "four";

  number2 = 5;

  constructor() { }

  ngOnInit(): void {

  }

}
