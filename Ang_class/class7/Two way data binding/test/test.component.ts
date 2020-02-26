import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  template: `

    <p>Template Reference Variable</p>
    <input type="text" #myInput/>
    <button (click)="onButtonClick(myInput.value)">Button</button>


    <p>Two Way Data Binding</p>
    <h1>{{ name }}</h1>
    <input type="text" [(ngModel)]="name"  />
  `,
  styles: [``]
})
export class TestComponent implements OnInit {
  name = "mark";

  onButtonClick(value) {
    console.log(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
