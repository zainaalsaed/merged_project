import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MahakemmapPage } from '../mahakemmap/mahakemmap';

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  slider = [
    {
      title : 'Special Invitation',
      image :"assets/img/music.jpg"
    },
    {
      title : 'Location',
      image :"assets/img/music.jpg"
    }

  ];

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Purchase a Ticket',
      
      inputs: [
        {
          name: 'email',
          placeholder: 'your email address'
        },

        {
          name: 'password',
          placeholder: 'your password'
        },

        {
          name: 'cardNum',
          placeholder: 'your card number'
        },
      ],
     
      buttons: [
        {
          text: 'Pay $150.00',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


mahakem(){
  this.navCtrl.push(MahakemmapPage);


}
}
