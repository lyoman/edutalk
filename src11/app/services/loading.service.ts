import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


   isLoading = false;

   constructor(public loadingController: LoadingController) { }
 
 
 // Waiting loader
     async presentLoading() {
       const loading = await this.loadingController.create({
         message: 'Please wait...',
         spinner: 'crescent',
        //  duration: 1000
       });
       await loading.present();
   
       const { role, data } = await loading.onDidDismiss();
   
       console.log('Loading dismissed!');
     }

     async jobSearching() {
      const loading = await this.loadingController.create({
        message: 'Searching jobs , Please wait...',
        spinner: 'crescent',
       //  duration: 1000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }

 // Dimiss Loader
   async dismiss() {
     this.isLoading = false;
     return await this.loadingController.dismiss().then(() => console.log('dismissed'));
   }
}
