import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <button (click)="onButtonCliked($event)">Click</button>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  onButtonCliked(event){
    console.log(event.type)
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
