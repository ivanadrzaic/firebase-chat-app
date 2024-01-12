import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.chatCollection = this.firestore.collection('chatMessages');
  }

  sendMessage(message: string) {
    this.chatCollection.add({
      message,
      timestamp: Date.now()
    });
  }

  getMessages(): Observable<any[]> {
    return this.chatCollection.valueChanges();
  }
}
