import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  constructor(private navCtrl: NavController, ) { }

  ngOnInit() {
  }

  login() {
    this.navCtrl.navigateForward('noticeboard');
  }

}
