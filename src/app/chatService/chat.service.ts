import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatMessages: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.chatMessages = this.db.list('chat');
  }

  sendMessage(message: string) {
    this.chatMessages.push({
      message,
      timestamp: Date.now()
    });
  }

  getMessages(): Observable<any[]> {
    return this.chatMessages.valueChanges();
  }
}
