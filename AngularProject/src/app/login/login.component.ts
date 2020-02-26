// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//
//   public userGroup: FormGroup;
//
//   constructor(private fb: FormBuilder) { }
//
//   ngOnInit(): void {
//     this.createForm();
//   }
//
//   createForm() {
//     this.userGroup = this.fb.group({
//       email: [null, Validators.required],
//       password: [null, Validators.required],
//     });
//   }
//
//   onSubmit(value) {
//     console.log(value);
//   }
//
// }



import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userForm = new FormGroup({
  //   email: new FormControl('@gmail.com'),
  //   password: new FormControl(),
  //   city: new FormControl('Faridabad')
  // });

  userForm = this.formBuilder.group({
    email: ['@gmail.com', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    password: [null, Validators.required],
    city: ['Faridabad', Validators.required],
    }
  );

  constructor(private formBuilder: FormBuilder) { }

  userdata: any;


  ngOnInit(): void {

  }

  Onsubmit(data) {console.log(data)}


}

