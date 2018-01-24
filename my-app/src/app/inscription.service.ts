import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Inscription } from "./inscription";
import { Http , Headers} from "@angular/http";

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

  public getInscriptionsObservable():Observable<Inscription[]>{
      return this._http.get(this.inscriptionUrl)
                       .map( response => response.json())
                       .catch(e => { return Observable.throw('error:' + e);});
  }

  

  constructor(private _http : Http) { }

}
