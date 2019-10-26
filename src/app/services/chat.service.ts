import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';


export interface Chat {
  messageId?    : string;
  date        : string;
  sender      : string;
  receiver    : string;
  message     : string;
  read_status : boolean;
} 

export interface User {
  uid: string;
  firstname: string;
  lastname: string; 
  email: string;
  city: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public bidCollection: AngularFirestoreCollection<Chat>;
  public usersCollection: AngularFirestoreCollection<User>;

  private chat     : Observable<Chat[]>;
  private received : Observable<Chat[]>;
  private users    : Observable<User[]>;

  constructor(private db: AngularFirestore) {

    this.bidCollection = db.collection<Chat>('chat');
    this.usersCollection = db.collection<User>('users');

  }

  getUsers() {
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    return this.users
  }

  userMessages(sender,receiver) {
    this.chat = this.db.collection<Chat>('chat', ref => ref.where('sender', '==', sender).where('receiver', '==', receiver)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }); 
      })
    );

    return this.chat
  }

  receivedMessages(sender, receiver) {
    this.received = this.db.collection<Chat>('chat', ref => ref.where('receiver', '==', sender).where('sender', '==', receiver)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }); 
      })
    );

    return this.received
  }
}
