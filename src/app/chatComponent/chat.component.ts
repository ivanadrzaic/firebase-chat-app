import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { ChatService } from '../chatService/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [DatePipe]
})
export class ChatComponent {
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
