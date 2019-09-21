import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import * as firebase from 'firebase'

import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController, ToastController, NavController } from '@ionic/angular';
// import { Router } from '@angular/router'
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public afs: AngularFirestore,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public ngAuth: AngularFireAuth,
    public alertCtrl: AlertController,
  ) { }


  ngOnInit() { }

  email: string = '';
  password: string = '';
  confirmPassword = '';
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  city: string = '';
  role: string = '';




  addUser() {

    if(this.password != this.confirmPassword){
      console.log('passwords did not match , pliz try again');
      this.passwordCheck();
    }
    else{

      console.log(this.firstName)
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').add({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        role: this.role,
        city: this.city,
        phoneNumber: this.phoneNumber
      })
        .then(
          (res) => {
            console.log(res)
          },
          err => reject(err)
        )
    })

    }

  }

  passwordCheck() {
    const alert = this.alertCtrl.create({
      header    : 'Error!!!',
      subHeader : 'passwords did not match , pliz try again',
      buttons   : ['OK']
    }).then(alert=> alert.present());
  }

  // signUp(){
  //   this.addUser()
  //   .then( res => {
  //     // let toast = this.toastCtrl.create({
  //     //   message: 'User was created successfully',
  //     //   duration: 3000
  //     // });
  //     // toast.present();
  //     // this.resetFields();
  //     console.log('new user', res);
  //   }, err => {
  //     console.log(err)
  //   })
  // }

  signUp() {
    // // console.log("Data being sent: ", this.account);

    // // show loader
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait...",
    // });
    // loader.present();

    try {
      if(this.password != this.confirmPassword){
        console.log('passwords did not match , pliz try again');
        this.passwordCheck();
      }

      else{
        this.ngAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log('1st user var:', user);

          firebase.auth().currentUser.updateProfile({
            displayName: this.firstName + ' ' + this.lastName,
            photoURL: 'assets/img/defaultUser.svg'
          })
            .then(() => {
              // send user to Firestore
              firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  console.log('user.uid:', user.uid);

                  let db = firebase.firestore();

                  db.collection('users').doc(user.uid).set({
                    uid: user.uid,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    city: this.city,
                    role: this.role
                  }).then(() => {

                    // save user profile details to localStorage
                    localStorage.setItem('iud', JSON.stringify(user.uid));
                    localStorage.setItem('firstName', JSON.stringify(this.firstName));
                    localStorage.setItem('lastName', JSON.stringify(this.lastName));
                    localStorage.setItem('email', JSON.stringify(this.email));
                    localStorage.setItem('phoneNumber', JSON.stringify(this.phoneNumber));
                    localStorage.setItem('city', JSON.stringify(this.city));
                    localStorage.setItem('role', JSON.stringify(this.role));

                    this.navCtrl.navigateRoot('login');

                  }).catch(error => {
                    // loader.dismiss();
                    // this.failAlert(error);
                    console.error(error);
                  })


                }
              })
            })
        });

      // if (user) {
      //   user.additionalUserInfo
      //   loader.dismiss();
      //   this.successAlert();
      //   console.log('user object returned is: ', user);
      //   this.navCtrl.push(LoginPage);
      // } else {
      //   this.failAlert('An error occured.');
      // }
      }

      
    } catch (e) {
      // loader.dismiss();
      console.error(e);
      // this.failAlert(e);
    }

  }


}

