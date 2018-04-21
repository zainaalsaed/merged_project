import { Component , ViewChild,ElementRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TableeghPage } from '../tableegh/tableegh';
import { TableeghacPage } from '../tableeghac/tableeghac';

declare var google;

@IonicPage()
@Component({
  selector: 'page-driveracc',
  templateUrl: 'driveracc.html'
})
export class DriveraccPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController,
    public http: Http) {


  }


  ionViewDidLoad(){
    this.displayGoogleMap();
this.getMarkers();
  }



  displayGoogleMap(){
    let latLng = new google.maps.LatLng(32.227437, 35.222397);
  let mapOptions = {
    center:latLng,
    zoom:12,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
}


getMarkers(){
  this.http.get('assets/data/acc.json').map((res)=>res.json()).subscribe(data=>{
    this.addMarkersMap(data);

  });
}

addMarkersMap(markers){
for(let marker of markers){
      var loc = {lat: marker.latitude , lng: marker.longitude};
      console.log(loc);
      marker = new google.maps.Marker({
      position: loc,
      map: this.map,
      title:marker.name,
      label:marker.content

});

}
}
addAccd(){

  this.navCtrl.push(TableeghacPage);
}
}
