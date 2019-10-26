import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-noticedetail',
  templateUrl: './noticedetail.page.html',
  styleUrls: ['./noticedetail.page.scss'],
})
export class NoticedetailPage implements OnInit {

  notice: any;

  constructor(private modalController: ModalController,
              private navParams: NavParams,) { }

  ngOnInit() {
    this.notice = this.navParams.get('notice');
    console.log('notice', this.notice);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
