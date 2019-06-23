import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content: IonContent;
  messages = [
    {
      user: 'alex',
      createdAt: 11234567890123,
      msg: 'Hey, wanna go for lunch?'
    },
    {
      user: 'gilbert',
      createdAt: 11234567890126,
      msg: 'Yeah, how about at 2pm?'
    },
    {
      user: 'alex',
      createdAt: 11234567890133,
      msg: 'Sounds good'
    },
    {
      user: 'alex',
      createdAt: 11234567890133,
      msg: '👍'
    },
    {
      user: 'gilbert',
      createdAt: 11234567890143,
      msg: 'See you then'
    }
  ];
  currentUser = 'gilbert';
  newMsg = '';

  constructor() { }


  sendMessage() {
    this.messages.push({
      user: 'gilbert',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
}
