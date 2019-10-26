import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {
  messages = [

    {
      user: 'simon',
      createdAt: 1554090856000,
      msg: 'hey whats up?'
    },

    {
      user: 'max',
      createdAt: 1554090956000,
      msg: 'hImgood?'
    },

     {
      user: 'simon',
      createdAt: 1554091056000,
      msg: 'Cool?'
    }

  ];

  currentUser = 'simon';
  newMsg = '';
   @ViewChild(IonContent, { read: true, static: false } ) content: IonContent

   constructor() { }
  sendMessage() {
    this.messages.push ({
      user: 'simon',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);

    });
         }

   ngOnInit() {
  }

}
