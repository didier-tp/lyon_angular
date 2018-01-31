import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http , Headers} from "@angular/http";
import { Inscription } from "./inscription";

@Injectable()
export class InscriptionService {
  private _headers = 
        new Headers({'Content-Type': 'application/json'});

  // Rappel: tp est à configurer dans proxy.conf.json 
  //(ng serve --proxy-config proxy.conf.json)
  inscriptionUrl : string ="./tp/inscription";

  public postInscriptionObservable(inscription : Inscription)
                 :Observable<Inscription>{
     return this._http.post(this.inscriptionUrl,
            JSON.stringify(inscription),
             {headers: this._headers})
      .map( response => response.json())
      .catch(e => { return Observable.throw('error:' + e);});
}

  public getInscriptionsObservable(numReg:string):Observable<Inscription[]>{
    let url = this.inscriptionUrl; 
    if(numReg != null && numReg.length >=2 ) {
      url += "?numReg=" + numReg;
    }
    return this._http.get(url)
                       .map( response => response.json())
                       .catch(e => { return Observable.throw('error:' + e);});
  }

  

  constructor(private _http : Http) { }

}
