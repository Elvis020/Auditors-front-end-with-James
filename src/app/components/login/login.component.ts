import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(''),
        email: new FormControl('')
      }),
    });
  }

  onSubmit() {
    console.log(this.signInForm.value.userData);
    this.signInForm.reset();
  }

}
