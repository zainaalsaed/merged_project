import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TrainPage } from '../train/train';
import { PrivatePage } from '../private/private';


/**
 * Generated class for the GuestPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html'
})
export class GuestPage {

  trainRoot = 'TrainPage'
  trafficRoot = 'TrafficPage'
  accidentRoot = 'AccidentPage'


  constructor(public navCtrl: NavController) {}

}
