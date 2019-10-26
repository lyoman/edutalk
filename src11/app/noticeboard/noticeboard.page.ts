import { NoticeService } from './../services/notice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NoticedetailPage } from '../noticeboard/noticedetail/noticedetail.page';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.page.html',
  styleUrls: ['./noticeboard.page.scss'],
})
export class NoticeboardPage implements OnInit {

  notices: any;


  constructor(private router: Router, 
              public modalCtrl: ModalController,
              private noticesService: NoticeService,) { }

  ngOnInit() {
   
    this.getNotices();
  }

  addNote(){
    this.router.navigateByUrl('/addnotice');
  }

  getNotices() {
    this.noticesService.getNotices().subscribe(res => {
      this.notices = res;
      console.log('notices', this.notices);

    });
  }


  async noticeDetail(notice) {
    const modal = await this.modalCtrl.create({
      component: NoticedetailPage,
      componentProps: {'notice': notice},
    });
    return await modal.present();
  }
}
