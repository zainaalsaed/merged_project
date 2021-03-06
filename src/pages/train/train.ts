import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivatePage } from '../private/private';
import { GuestPage } from '../guest/guest';
import { TruckPage } from "../truck/truck";

/**
 * Generated class for the TrainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
})
export class TrainPage {

  nav: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainPage');
  }
  priVlc(){
    this.navCtrl.push(PrivatePage);
  }
  truVlc()
  {
    this.navCtrl.push(TruckPage);
  }

}
