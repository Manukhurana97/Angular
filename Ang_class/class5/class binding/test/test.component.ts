import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <h1 class="text-special">Welcome Guest</h1>
  <h1 [class]="classSuccess">Mark</h1>
  <h1 [class.text-success]="hasError">This is some heading</h1>

  <h1 [ngClass]="message">Some Heading</h1>
    
  `,
  styles: [
    `
    .text-success {
      color: green;
    }
  
    .text-danger {
      color: red;
    }
    .text-underline{
      text-decoration: underline
    }
  
    .text-special {
      font-style: italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {

  classSuccess = "text-success"
  hasLine = true
  hasError = true

  message = {
    'text-success': this.hasError,
    'text-danger': !this.hasError,
    'text-underline': this.hasLine
  }


  constructor() { }

  ngOnInit(): void {

  }

}
