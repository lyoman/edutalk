import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {

  constructor(private navCtrl: NavController, ) {

   }

  ngOnInit() {
  }

  goToRegisterPage() {this.navCtrl.navigateForward('/register');
}
  forgotPassword() {}

  student() {
    this.navCtrl.navigateForward('student');
  }

  // parent() {
  //   this.navCtrl.navigateForward('parent');
  // }

  // staff() {
  //   this.navCtrl.navigateForward('staff');
  // }
}
