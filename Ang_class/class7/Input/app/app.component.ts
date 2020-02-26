import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';


  name = "Mark Smith";

  person = {
    firstName: "Mark",
    lastName: "Smith",
    email : "m@gmail.com"
  }

  


}
