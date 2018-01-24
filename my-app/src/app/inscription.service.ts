import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Inscription } from "./inscription";
import { Http } from "@angular/http";


@Injectable()
export class InscriptionService {

  inscriptionUrl : string ="./tp/inscription";


  public getInscriptionsObservable():Observable<Inscription[]>{
      return this._http.get(this.inscriptionUrl)
                       .map( response => response.json())
                       .catch(e => { return Observable.throw('error:' + e);});
  }

  constructor(private _http : Http) { }

}
