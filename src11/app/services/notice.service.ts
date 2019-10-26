import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

export interface Notice {
  id?: string;
  title: string;
  noticeId: string;
  description: string;
  category: string;
  reader: string;
  createdDate: string;

}

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private noticeCollection: AngularFirestoreCollection<Notice>;

  private notices: Observable<Notice[]>;

  constructor(private db: AngularFirestore) { 
    this.noticeCollection = db.collection<Notice>('notices');
   } 

  getNotices() {
    this.notices = this.noticeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.notices;
  }
}
