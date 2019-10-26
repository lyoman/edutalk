import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private router: Router,
    // private authService: AuthenticateService,
    // private formBuilder: FormBuilder

  ) { }

  email = '';
  password = '';
  user: any;


 // tslint:disable-next-line: variable-name
 validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  ngOnInit() {

    if (localStorage.getItem('user_id') != null) {
      this.router.navigateByUrl('tebs');
    }

    // this.validations_form = this.formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required
    //   ])),
    // });
  }

  loginUser1(){
    this.router.navigateByUrl('tebs');
  }


  async loginUser() {

    const { email, password } = this;

    try {

      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('user', JSON.stringify(res));
      console.log('user detail', res);
      console.log('login', res.user.uid);
      localStorage.setItem('user_id', JSON.stringify(res.user.uid));
      localStorage.setItem('username', JSON.stringify(res.user.displayName));

      this.router.navigateByUrl('tebs');

    } catch (err) {

      console.log('error', err);

      const toast = this.toastCtrl.create({
        message: 'Invalid details please try again',
        duration: 3000,
      });

      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
    }
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

  forgotPassword() {

  }


}
