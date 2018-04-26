import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { Geolocation , Geoposition} from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the CurrentlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currentloc',
  templateUrl: 'currentloc.html',
})
export class CurrentlocPage {
  mapInitialised: boolean;
  public lat;
  public long;
  
  constructor(public geoloc: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentlocPage');
  }
  initMap(): Promise<any> {
    this.mapInitialised = true;
    return new Promise((resolve) => {
      this.geoloc.getCurrentPosition().then((position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        // YOUR CODE CONTINUES HERE...
      });
    });
  };
  
  saveLocation(){
    firebase.database().ref('PATH/YOU/WANT/TO/SAVE').update({
      lat: this.lat,
      long: this.long
    }).then(res =>{
      // THE LOCATION IS SAVED, DO YOUR STUFF
    })
  }

}
