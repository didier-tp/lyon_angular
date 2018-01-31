import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http , Headers} from "@angular/http";

@Injectable()
export class EmpruntService {

  private _headers = 
  new Headers({'Content-Type': 'application/json'});

// Rappel: tp est à configurer dans proxy.conf.json 
//(ng serve --proxy-config proxy.conf.json)
tauxInteretCourantUrl : string ="./tp/tauxInteretCourant"; //?duree=6;

  constructor(private _http : Http) { }

  public getTauxInteretCourantObservable(duree:number):Observable<object>{
    let url = this.tauxInteretCourantUrl+"?duree="+duree; 
    return this._http.get(url)
                       .map( response => response.json())
                       .catch(e => { return Observable.throw('error:' + e);});
  }

  calculMens(montant , tauxAnnuel , nbMois ):number{
    let tauxMensuel = tauxAnnuel / 12; //taux mensuel
    return (montant * tauxMensuel) /
            ( 1 - Math.pow(1+tauxMensuel , -nbMois) );
  }

}
