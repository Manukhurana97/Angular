import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <img [src]="imagePath"/>

  <img src="{{ imagePath + imageName }}"/><br>

  <button disabled>Click Me</button>
  <button disabled={{isDisabled}}>Click Me</button>
  <button [disabled]="isDisabled">Click Me</button>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  isDisabled = false;
  imagePath = "https://www.iiht.com/wp-content/uploads/2018/11/";
  imageName = "iiht-logo1.png"

  constructor() { }

  ngOnInit(): void {
  }

}
