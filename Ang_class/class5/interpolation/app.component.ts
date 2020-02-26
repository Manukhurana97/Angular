import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> App Component</h1>
  <h1> Mark </h1>
  <h1>{{ name }}</h1>
  <h1> {{ 100 + 200 }} </h1>
  <h1>{{ 'welcome '+ name }}</h1>
  <h1>{{ name.length }}</h1>
  <h1>{{ name.toUpperCase() }}</h1>
  <h1>{{ getMessage() }}</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';

  name = "Mark Smith";

  getMessage(){
    return "Hello "+ this.name;
  }


}
