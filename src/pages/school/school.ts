import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewsPage} from "../news/news";
import { MyProvider } from '../../providers/my/my';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import {RegisterPage} from "../register/register";
import { JeninschoolsPage } from "../Jeninschools/Jeninschools";
import { JerusalemschoolsPage } from "../Jerusalemschools/Jerusalemschools";
import { QalqilyaschoolsPage } from "../Qalqilyaschools/Qalqilyaschools";
import { TulkarmschoolsPage } from "../Tulkarmschools/Tulkarmschools";
import { RamallahschoolsPage } from "../Ramallahschools/Ramallahschools";
import { NablusschoolsPage } from '../nablusschools/nablusschools';
import { HebronschoolsPage } from "../hebronschools/hebronschools";
import { BethlehemschoolsPage } from "../bethlehemschools/bethlehemschools";
import { JerichoschoolsPage } from "../jerichoschools/jerichoschools";

/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
})
export class SchoolPage {
  item:string;
  nav: any;
  searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:MyProvider ) {
    this.searchControl = new FormControl();
    this.item=navParams.get('data');
  }

  ionViewDidLoad() {
    this.setFilteredItems();
 
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

        this.searching = false;
        this.setFilteredItems();

    });


}

onSearchInput(){
    this.searching = true;
}

setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

}
searchBoxValue="";

reg(event,item) { 
  if ( item.title=='Nablus')
  {this.nav.push(JerichoschoolsPage);}
 
}


}
