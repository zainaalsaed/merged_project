import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
//import { FingerprintAIO} from '@ionic-native/fingerprint-aio'
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {MyApp} from "./app.component";
import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {IonicPageModule} from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { NewsPage } from "../pages/news/news";
import { MyProvider } from '../providers/my/my';
import { SchoolPage } from "../pages/school/school";
import { HttpModule } from '@angular/http';
import { NablusschoolsPage } from "../pages/nablusschools/nablusschools";
import { jeninschoolsPage } from "../pages/jeninschools/jeninschools";
import { jerusalemschoolsPage } from "../pages/jerusalemschools/jerusalemschools";
import { qalqilyaschoolsPage } from "../pages/qalqilyaschools/qalqilyaschools";
import { tulkarmschoolsPage } from "../pages/tulkarmschools/tulkarmschools";
import { ramallahschoolsPage } from "../pages/ramallahschools/ramallahschools";
import { HebronschoolsPage } from "../pages/hebronschools/hebronschools";
import { BethlehemschoolsPage } from "../pages/bethlehemschools/bethlehemschools";
import { JerichoschoolsPage } from "../pages/jerichoschools/jerichoschools";
import { ScanRegisterPage } from "../pages/scan-register/scan-register";
import { ScanPage } from "../pages/scan/scan";
import { RegscPage } from "../pages/regsc/regsc";
import { ComplainsPage } from '../pages/complains/complains';
import { ProfilePage } from "../pages/profile/profile";
import { DriverPage } from "../pages/driver/driver";
import { ViolationsPage } from "../pages/violations/violations";
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { StartPage } from "../pages/start/start";
import { GuestPage } from "../pages/guest/guest";
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { TrackPage } from "../pages/track/track";
import { EduPage } from "../pages/edu/edu";
import { PrivatePage } from "../pages/private/private";

import { PaymentPage } from "../pages/payment/payment";
import { MahakemmapPage } from "../pages/mahakemmap/mahakemmap";
import {  DriveraccPage } from "../pages/driveracc/driveracc";
import { SchoolmapPage } from "../pages/schoolmap/schoolmap";

import { TruckPage } from "../pages/truck/truck";
import { TableeghPage } from "../pages/tableegh/tableegh";
import { TableeghacPage } from "../pages/tableeghac/tableeghac";
import { TestPage } from "../pages/test/test";
<<<<<<< HEAD
 //import * as firebase from 'firebase/app';
import { Camera  } from '@ionic-native/camera';
import { TasweerPage } from "../pages/tasweer/tasweer";
import * as firebase from 'firebase'
import 'firebase/firestore';
import { CurrentlocPage } from "../pages/currentloc/currentloc";
import { TestatPage } from "../pages/testat/testat";
import { TestatService } from "../services/testat-service";
=======
import { MenuPage } from "../pages/menu/menu";
import { ListPage } from "../pages/list/list";


>>>>>>> c94783f9760c2df81691299af1d414194f018cac

const firebaseAuth = {
  apiKey: "AIzaSyDaMitUUxNTOo7uWpsRuhDtl4ox7cvR1FA",
  authDomain: "test-project-ca0ec.firebaseapp.com",
  databaseURL: "https://test-project-ca0ec.firebaseio.com",
  projectId: "test-project-ca0ec",
  storageBucket: "",
  messagingSenderId: "778431294120"
  
};
//export default !firebase.apps.length ? firebase.initializeApp(firebaseAuth) : firebase.app();
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }


// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    TruckPage,
    jerusalemschoolsPage,
    CheckoutTripPage,
    MenuPage,
    HomePage,
    EduPage,
    PrivatePage,
    LoginPage,
    ListPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    JerichoschoolsPage,
    BethlehemschoolsPage,
    NablusschoolsPage,
    tulkarmschoolsPage,
    qalqilyaschoolsPage,
    jeninschoolsPage,
    ramallahschoolsPage,
    HebronschoolsPage ,
    SchoolPage,
    ViolationsPage ,
    ScanPage,
    ComplainsPage,
    RegscPage,
    ScanRegisterPage,
    NewsPage,
    ProfilePage,
    DriverPage,
    StartPage,
    GuestPage,
    TrackPage,
    PrivatePage,
    PaymentPage,
    MahakemmapPage,
    DriveraccPage,
    SchoolmapPage,
    TableeghPage,
    TableeghacPage,
    TestPage,
    TasweerPage,
    CurrentlocPage,
    TestatPage
    //TestPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TruckPage,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    qalqilyaschoolsPage,
    RegisterPage,
    PrivatePage,
    MenuPage,
    ListPage,
    SearchLocationPage,
    TripDetailPage,
    JerichoschoolsPage,
    TripsPage,
    EduPage,
    ViolationsPage ,
    HebronschoolsPage ,
    BethlehemschoolsPage,
    ramallahschoolsPage,
    jeninschoolsPage,
    tulkarmschoolsPage,
    jerusalemschoolsPage,
    NablusschoolsPage,
    SchoolPage,
    ScanPage,
    ComplainsPage,
    RegscPage,
    ScanRegisterPage,
    NewsPage,
    DriverPage,
    ProfilePage,
    StartPage,
    GuestPage,
    TrackPage,
    PrivatePage,
    PaymentPage,
    MahakemmapPage,
    DriveraccPage,
    SchoolmapPage,
    TableeghPage,
    TableeghacPage,
    TestPage,
    TasweerPage,
    CurrentlocPage,
    TestatPage
    //TestPage
  ],
  providers: [
    Geolocation,
    BackgroundGeolocation,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    TestatService,
    WeatherProvider,
    MyProvider,
    Camera
  ]
})

export class AppModule {
}
