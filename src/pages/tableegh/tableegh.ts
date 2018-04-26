import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { NewsPage } from '../news/news';
import { TasweerPage } from '../tasweer/tasweer';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { CurrentlocPage } from '../currentloc/currentloc';

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
  camera: Camera;
  CameraOptions:CameraOptions;
  tableeghList :  AngularFireList<any>;
  constructor(  private alertCtrl: AlertController,  public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
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



//   giveaPhoto(sourceType:number){
   
//       const options: CameraOptions = {

//         quality: 50,
// destinationType: this.camera.DestinationType.DATA_URL,
// allowEdit: true,
// saveToPhotoAlbum: false,
// cameraDirection: 1,
// sourceType: this.camera.PictureSourceType.CAMERA




        
//         // quality: 50,
//         // destinationType: this.camera.DestinationType.DATA_URL,
//         // encodingType: this.camera.EncodingType.JPEG,
//         // mediaType: this.camera.MediaType.PICTURE,
//         // correctOrientation: true,
//         // sourceType:sourceType,
//       }
//   Navigator.camera.getPicture(
//         (data)  => {
//           let image = "data:image/jpeg;base64," + data;
//         },
//         (error) => { console.log("CAMERA ERROR") },
//         options
//     );
//       // this.camera.getPicture(options).then((imageData) => {
//       //   let base64Image = 'data:image/jpeg;base64,' + imageData;
//       // }, (err) => {
//       //   // Handle error
//       // });


      
    
//   }
  giveaPhotocam(){

this.navCtrl.push(CurrentlocPage);  } 
//   giveaPhotofunc(){
//     this.giveaPhoto(1);//camera

//   }
}
