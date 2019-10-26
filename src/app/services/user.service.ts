import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

interface user {
	username: string,
	uid: string
}

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usersCollection: AngularFirestoreCollection<User>;

  private user: user
  private users: Observable<User[]>;
  private oneuser: Observable<User[]>;

	constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
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

  getOneUser(user_id) {
    this.oneuser =  this.db.collection<User>('users', ref => ref.where('uid', '==', user_id)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    return this.oneuser
  }
  
  setUser(user: user) {
		this.user = user
	}

	getUsername(): string {
		return this.user.username
	}

	reAuth(username: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@codedamn.com', password))
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail + '@codedamn.com')
	}

	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
				username: user.email.split('@')[0],
				uid: user.uid
			})

			return true
		}
		return false
	}

	getUID(): string {
		return this.user.uid
	}
}
