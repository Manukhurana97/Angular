import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  phoneno = ['+91', '+971',  '+972', '+198', '+701'];

  Userdata = new User('', '@gmail.com', '', '', 'female', true);

  ngOnInit(): void {
  }

}
