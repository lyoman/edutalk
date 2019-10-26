import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [
    {
      user: 'shania',
      createdAt: 15151515,
      msg: 'Hey'
    },
    {
      user: 'shania',
      msg: 'Hey'
    }


  ];
 constructor() { }
 public images: any;
@ViewChild (IonSlides, {static: true}) slider: IonSlides;
page = 0;

 ngOnInit() {
  }

  selectedTab(index) {
    this.slider.slideTo(index);
  }
}
