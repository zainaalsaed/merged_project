import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrainPage } from '../train/train';
import { GuestPage } from '../guest/guest';
import { PrivatePage } from '../private/private';

/**
 * Generated class for the TruckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truck',
  templateUrl: 'truck.html',
})
export class TruckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckPage');
  }
  priVlc(){
    this.navCtrl.push(PrivatePage);
  }
  truVlc()
  {
    this.navCtrl.push(TruckPage);
  }

}
