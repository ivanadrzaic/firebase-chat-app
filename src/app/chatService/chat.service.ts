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

  // Metoda za slanje poruke
  sendMessage(message: string) {
    this.chatMessages.push({
      message,
      timestamp: Date.now()
      // možeš dodati i korisnika koji je poslao poruku, id, ime, itd.
    });
  }

  // Metoda za čitanje poruka
  getMessages(): Observable<any[]> {
    return this.chatMessages.valueChanges();
  }
}
