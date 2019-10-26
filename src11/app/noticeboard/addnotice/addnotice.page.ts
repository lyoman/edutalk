import { LoadingService } from './../../services/loading.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.page.html',
  styleUrls: ['./addnotice.page.scss'],
})
export class AddnoticePage implements OnInit {

  user_id: any;

  noticeInfo: { noticeId: string, sender: string, title: string, date: string, description: string, reader: string, category: string } = {
    noticeId: new Date().getTime().toString(),
    title: '',
    description: '',
    category: '',
    reader: '',
    sender: '',
    date: new Date().toString()
  }; 

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public loading: LoadingService,) { }

  ngOnInit() {
    this.user_id = JSON.parse(localStorage.getItem('user_id')); // localStorage.getItem('user').replace(/['"]+/g, '');
    console.log("user id is: " + this.user_id)
  }

  addNotice(){
     // this.loading.presentLoading();

     let db = firebase.firestore();
    
     try {
       let d = new Date();
       let date = d.toUTCString().toString(); 
       
 
       let t = d.getMinutes() + " " +  d.getSeconds(); // =>  30
 
       db.collection('notices').doc(this.noticeInfo.noticeId).set({
         noticeId: this.noticeInfo.noticeId,
         title: this.noticeInfo.title,
         date: this.noticeInfo.date,
         description: this.noticeInfo.description,
         category: this.noticeInfo.category,
         sender: this.user_id,
         createdDate: date,
        //  minutes:t,
         reader:this.noticeInfo.reader
       }).then(() => {
         this.loading.dismiss();
         this.noticePostSuccess();
         this.navCtrl.navigateRoot('noticeboard');
 
       }).catch((error) => {
         // this.loading.dismiss();
         this.noticePostFail(error);
         console.error(error);
       });
     } catch(error) {
       // this.loading.dismiss();
       this.noticePostFail(error);
       console.error(error);
     }
  }

  noticePostSuccess() {
    const alert = this.alertCtrl.create({
      header   : 'Notice Post Success!',
      // message  : 'Please try again later',
      subHeader:  'You have successfully posted a notice to '+ this.noticeInfo.reader +'s',
    buttons  : ['OK']}).then(alert=> alert.present());
  }


  noticePostFail(error) {
    const alert = this.alertCtrl.create({
      header    : 'notice Post Failed!',
      subHeader : 'Sorry, we weren\'t able to post your notice. Please try again. Error: ' + error,
      buttons   : ['OK']
    }).then(alert=> alert.present());
  }

}
