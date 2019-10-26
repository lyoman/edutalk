import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userid: any;
  password: any;

  constructor() { }



register() {

}

  ngOnInit() {
  }

  login() {
    const {userid, password} = this;

  }


}
