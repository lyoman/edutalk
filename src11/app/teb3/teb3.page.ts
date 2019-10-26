import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-teb3',
  templateUrl: './teb3.page.html',
  styleUrls: ['./teb3.page.scss'],
})
export class Teb3Page implements OnInit {

  user_id: any;
  users: any;
  user: any;

  username: any;

  constructor(
              private plt: Platform,
              private router: Router,
              private usersService: UserService,
              ) { 

                const token = JSON.parse(localStorage.getItem('user_id'));
                this.user_id = token;
                console.log('Logged in user', this.user_id);


                const username = JSON.parse(localStorage.getItem('username'));
                this.username = username;
                console.log('me', this.username)
   }

   ngOnInit() {

    this.usersService.getOneUser(this.user_id).subscribe(res => {
      this.user = res;
      console.log('pfeeee', this.user);
    });


  }


}
