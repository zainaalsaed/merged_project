import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import {DriveraccPage } from '../driveracc/driveracc';
import { TableeghPage } from '../tableegh/tableegh';
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import { TripDetailPage } from '../trip-detail/trip-detail';
import { CheckoutTripPage } from '../checkout-trip/checkout-trip';
import { TestPage } from '../test/test';
import { MenuPage } from '../menu/menu';
import { ListPage } from '../list/list';

/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {

  constructor( public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
  }



  

  gotPay(){

this.navCtrl.push(PaymentPage);
  
}
driverAccident(){
  this.navCtrl.push(DriveraccPage);



}
goToAccountat() {
  this.navCtrl.push(SettingsPage);
}
addRep(){
  this.navCtrl.push(TableeghPage);
}
  

presentNotificationat(myEventat) {
  console.log(myEventat);
  let popover = this.popoverCtrl.create(NotificationsPage);
  popover.present({
    ev: myEventat
  });
}
testo(){

  this.navCtrl.push(TripDetailPage);
}
ytesto(){

  this.navCtrl.push(ListPage);
}
memetete(){
  this.navCtrl.push(TestPage);
}
}
