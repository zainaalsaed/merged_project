import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivatePage } from '../private/private';

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
  pri(){
    this.nav.push(PrivatePage);
  }

}
