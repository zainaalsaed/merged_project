import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,IonicPage } from 'ionic-angular';
import {LoginPage} from "../login/login";
import { SchoolPage } from '../school/school';
import { MyProvider } from '../../providers/my/my';
import { NablusschoolsPage } from '../nablusschools/nablusschools';
import { jeninschoolsPage } from "../jeninschools/jeninschools";
import { jerusalemschoolsPage } from "../jerusalemschools/jerusalemschools";
import { qalqilyaschoolsPage } from "../qalqilyaschools/qalqilyaschools";
import { tulkarmschoolsPage } from "../tulkarmschools/tulkarmschools";
import { ramallahschoolsPage } from "../ramallahschools/ramallahschools";
import { HebronschoolsPage } from "../hebronschools/hebronschools";
import { BethlehemschoolsPage } from "../bethlehemschools/bethlehemschools";
import { JerichoschoolsPage } from "../jerichoschools/jerichoschools";
import { ScanPage } from '../scan/scan';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { RegscPage } from '../regsc/regsc';
import { LocalWeatherPage } from '../local-weather/local-weather';
import { SearchLocationPage } from '../search-location/search-location';
import { ComplainsPage } from '../complains/complains';



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
 
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  //navCtrl :any= this.nav;
  constructor(
    public navCtrl: NavController,
   
    
    //private backEnd: BackendProvider,
    public alertCtrl: AlertController ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  account() {
    this.navCtrl.push(LoginPage);
  }
  School(){
  
    this.navCtrl.push(SchoolPage);
  }
  
  showComp(){
    this.navCtrl.setRoot(LocalWeatherPage);
  }
  Weat(){

this.navCtrl.push(LocalWeatherPage);

  }
  comp(){
    this.navCtrl.push(ComplainsPage);
  }
  

}
