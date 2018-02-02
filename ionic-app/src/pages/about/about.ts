import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MeteoProvider } from "../../providers/meteo/meteo";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  longitude : number;
  latitude : number;
  altitude : number;

  infosMeteo : object;

  constructor(public navCtrl: NavController,
               public platform: Platform, 
              public geolocation: Geolocation,
              public meteoProvider : MeteoProvider) {
    platform.ready()
        /*.then(this.demanderEtRecupererPosition.bind(this));*/
        .then(() => this.demanderEtRecupererPosition());
  }

  public demanderEtRecupererPosition() :void{
    this.geolocation.getCurrentPosition()
    .then( /*this.recupererPosition.bind(this)*/
          (position)=> this.recupererPosition(position))
    .catch((error) => {console.log('Error :'+ error); });
  }

  public recupererPosition( position ) :void {
      console.log(position) ;
      this.latitude= position.coords.latitude;
      this.longitude= position.coords.longitude;
      this.altitude=position.coords.altitude;
  }

  onMeteo(){
    this.meteoProvider.getMeteoSelonCoordGps(this.longitude,this.latitude)
       .subscribe((infosMeteo)=>{this.infosMeteo=infosMeteo});
  }

}
