import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { People } from '../../models/people';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
/**
 * 
 * 
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl:  'profile.html',
})
export class ProfilePage {

  userData : FirebaseObjectObservable<People>;
  
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth ,
    private afDatabase: AngularFireDatabase,afDb: AngularFireDatabase,
     public navParams: NavParams) {
      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid)   {
  
          //this.products = this.db.list(products/${this.userId}).valueChanges()
       //   this.userData = this.afDatabase.object('user/'+ data.uid).valueChanges();
         }
        
        
        }
    );
      

  }


  ionViewDidLoad() {
    console.log(' ionViewDidLoad ProfilePage');

    
  }

}