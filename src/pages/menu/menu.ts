import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides} from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public isSearchbarOpened = false;

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider:Slides;

  SwipedTabsIndicator:any=null;
  tabs:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs=["Kittnes","Puppies","Ducklings"];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ionViewDidEnter(){
    this.SwipedTabsIndicator=document.getElementById("indicator");
  }

  selectTab(index){
      this.SwipedTabsIndicator.style.webkitTransform='translate3d('+(100*index)+'%,0,0)';
      this.SwipedTabsSlider.slideTo(index,500);
  }
  updateIndicatorPosition(){
    if(this.SwipedTabsSlider.length()>this.SwipedTabsSlider.getActiveIndex()){
      this.SwipedTabsIndicator.style.webkitTransform='translate3d('+(this.SwipedTabsSlider.getActiveIndex()*100)+'%,0,0)';
    }
  }

  animateIndicator($event){
    if(this.SwipedTabsIndicator)
      this.SwipedTabsIndicator.style.webkitTransform='translate3d('+(($event.progress*(this.SwipedTabsSlider.length()-1)));
  }
  onSearch(event){
    console.log(event.target.value);
  }
}
