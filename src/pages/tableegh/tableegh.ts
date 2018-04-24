import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { NewsPage } from '../news/news';

/**
 * Generated class for the TableeghPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tableegh',
  templateUrl: 'tableegh.html',
})
export class TableeghPage {
  tableeghList :  AngularFireList<any>;
  constructor( private alertCtrl: AlertController,  public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.tableeghList = db.list('/tableegh')
 
  
  
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Submitted!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  createTableegh(platNum,platType,description){
    this.tableeghList.push({
      platNum : platNum,
        platType : platType,
        description : description,

        }).then(newTableegh =>{
    this.navCtrl.push(TableeghPage);
    },error=>{console.log(error);});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableeghPage');
  }

}
