import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ChatService } from '../chatService/chat.service';

@Component({
  selector: 'app-unauthenticated-chat',
  templateUrl: './unauthenticated-chat.component.html',
  styleUrls: ['./unauthenticated-chat.component.scss'],
  providers: [DatePipe]
})
export class UnauthenticatedChatComponent {
  messages$: Observable<any[]>;
  newMessage: string = '';

  constructor(private chatService: ChatService, private datePipe: DatePipe) {
    this.messages$ = this.chatService.getMessages();
  }


  formatTimestamp(timestamp: number): string {
    return this.datePipe.transform(timestamp, 'mediumTime') || '';
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}