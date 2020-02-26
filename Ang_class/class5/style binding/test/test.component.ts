import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
   <h1 style="color: red">This is Heading</h1>
   <h1 [style.color]="'orange'" >Some Other Heading </h1>

   <h1 [style.color]="hasError ? 'red': 'green'">Some Other Other Heading</h1>

   <h1 [style.background]="markColor" >Some Thing</h1>

   <h1 [ngStyle]="special" >Text</h1>
  `,
  styles: [
    `
    `
  ]
})
export class TestComponent implements OnInit {

  hasError = false
  markColor = "yellow"

  special = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: "32px"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
