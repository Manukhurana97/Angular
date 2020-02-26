import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  
  <div>
     <h1 *ngIf="hasError">Hello from If</h1>
     <h1 *ngIf="!hasError">Hello from Else</h1>
  </div>

  <h1 *ngIf="hasError; else:elseBlock; then: ifBlock"></h1>

  <ng-template #elseBlock>
    <h1>Hello from another else</h1>
  </ng-template>

  <ng-template #ifBlock>
    <h1>Hello from another If</h1>
  </ng-template>

  <button *ngIf="!isLoggedIn" class="btn btn-primary">Login</button>
  <button *ngIf="isLoggedIn" class="btn btn-danger">Logout</button>
  `,
  styles: [
    `
    `
  ]
})
export class TestComponent implements OnInit {

  isLoggedIn = false;

  hasError = false;

  constructor() { }

  ngOnInit(): void {

  }

}
