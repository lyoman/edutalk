import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teb1',
  templateUrl: './teb1.page.html',
  styleUrls: ['./teb1.page.scss'],
})
export class Teb1Page implements OnInit {

  
  token: any;
  users :any;
  response: any;
  response1: any;
  status: any;
  username: any;

  constructor(
              public router:Router, 
              ) { 

                const token = JSON.parse(localStorage.getItem('user_id'));
                this.token = token;
                console.log('token again', this.token);

                if(this.token == null){
                  this.router.navigateByUrl('login'); 
                }

                const username = JSON.parse(localStorage.getItem('username'));
                this.username = username;
                console.log('me', this.username)
   }

  ngOnInit() {
  }

  profile(){
    this.router.navigateByUrl('tebs/teb3');
  }

  notice(){
    this.router.navigateByUrl('noticeboard');
  }

  chat(){
    this.router.navigateByUrl('chat-page');
  }

  progress(){
    this.router.navigateByUrl('progress');
  }

  resources(){
    this.router.navigateByUrl('resources');
  }

  backToWelcome(){
    this.router.navigateByUrl('login');    

}

  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 500);
}

}
