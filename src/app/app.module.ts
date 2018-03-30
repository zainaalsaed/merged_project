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
import { JeninschoolsPage } from "../pages/Jeninschools/Jeninschools";
import { JerusalemschoolsPage } from "../pages/Jerusalemschools/Jerusalemschools";
import { QalqilyaschoolsPage } from "../pages/Qalqilyaschools/Qalqilyaschools";
import { TulkarmschoolsPage } from "../pages/Tulkarmschools/Tulkarmschools";
import { RamallahschoolsPage } from "../pages/Ramallahschools/Ramallahschools";
import { HebronschoolsPage } from "../pages/hebronschools/hebronschools";
import { BethlehemschoolsPage } from "../pages/bethlehemschools/bethlehemschools";
import { JerichoschoolsPage } from "../pages/jerichoschools/jerichoschools";
import { ScanRegisterPage } from "../pages/scan-register/scan-register";
import { ScanPage } from "../pages/scan/scan";
import { RegscPage } from "../pages/regsc/regsc";




const firebaseAuth = {
  apiKey: "AIzaSyDaMitUUxNTOo7uWpsRuhDtl4ox7cvR1FA",
  authDomain: "test-project-ca0ec.firebaseapp.com",
  databaseURL: "https://test-project-ca0ec.firebaseio.com",
  projectId: "test-project-ca0ec",
  storageBucket: "",
  messagingSenderId: "778431294120"
};
// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    JerusalemschoolsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    JerichoschoolsPage,
    BethlehemschoolsPage,
    NablusschoolsPage,
    TulkarmschoolsPage,
    QalqilyaschoolsPage,
    JeninschoolsPage,
    RamallahschoolsPage,
    HebronschoolsPage ,
    SchoolPage,
    ScanPage,
    RegscPage,
    ScanRegisterPage,
    NewsPage
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
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    QalqilyaschoolsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    JerichoschoolsPage,
    TripsPage,
    HebronschoolsPage ,
    BethlehemschoolsPage,
    RamallahschoolsPage,
    JeninschoolsPage,
    TulkarmschoolsPage,
    JerusalemschoolsPage,
    NablusschoolsPage,
    SchoolPage,
    ScanPage,
    RegscPage,
    ScanRegisterPage,
    NewsPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    MyProvider
  ]
})

export class AppModule {
}
