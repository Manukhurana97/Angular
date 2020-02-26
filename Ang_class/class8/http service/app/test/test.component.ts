import { Component, OnInit} from "@angular/core";


@Component({
  selector: "app-test",
  template: `
  
  <h1>{{ name | uppercase }}</h1>
  <h1>{{ name | lowercase }}</h1>
  <h1>{{ name | titlecase }}</h1>
  <br>
  <h1>{{ person | json }}</h1>
  <br>
  <h1>{{ .25 | percent }}</h1>
  <h1>{{ 100 | currency  }}</h1>
  <h1>{{ 100 | currency : 'INR' }}</h1>
  <h1>{{ 100 | currency : 'INR': 'code' }}</h1>
  <h1>{{ 100.00 | currency : 'GBP'}}</h1>
  <br>
  <h1>{{ currentDate }}</h1>
  <h1>{{ currentDate | date: 'shortDate'}}</h1>
  <h1>{{ currentDate | date: 'longDate'}}</h1>
  <h1>{{ currentDate | date: 'longTime'}}</h1>
  <br>
  <h1>{{ 123.123 | number : '2.1-2' }}</h1>
  <h1>{{ 123.123 | number : '5.3-4' }}</h1>
  <h1>{{ 123.123 | number : '1.4-5' }}</h1>

  `,
  styles: [``]
})
export class TestComponent implements OnInit {
  
  public name = "mark smith";
  public currentDate = new Date();

  public person = {
    firstName: "Paul",
    lastName: "Watson",
    email: "p@gmail.com"
  }

  constructor() {}


  

  ngOnInit(): void {}
}
