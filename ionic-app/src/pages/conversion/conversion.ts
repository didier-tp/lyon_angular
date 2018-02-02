import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChangeProvider } from "../../providers/change/change";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-conversion',
  templateUrl: 'conversion.html'
})
export class ConversionPage {
  source : string = "EUR";  cible : string = "USD";
  montant : number = 100;  change : number;
  sommeConvertie : number;
  devises : string[] = [ "USD" , "EUR" , "GBP" , "JPY" , "DKK"];

  constructor(public navCtrl: NavController, 
              public changeProvider : ChangeProvider) {
  }

  onConvertir(){
    /*this.changeProvider.getTabChangeSelonBase(this.source)
          .subscribe(*/
    this.changeProvider.getTabChangeSelonBasePromise(this.source)
          .then(
                     (rates)=>{ this.change = rates[this.cible] ;
                                this.sommeConvertie = 
                                this.montant * this.change ; },
                     (error)=>console.log("error"+error));
    //NB : Dans le film "Visiteur" , la promise était 
    //attendue pour rester "ZEN" / "then" .
  }

}
