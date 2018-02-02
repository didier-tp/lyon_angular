//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
@Injectable()
export class ChangeProvider {
  constructor(public http: Http/*HttpClient*/) {
    console.log('Hello ChangeProvider Provider');
  }
  //à appeler via s.getTabChangeSelonBasePromise.then(...)
  public getTabChangeSelonBasePromise(base : string) : Promise<object> {
   return this.getTabChangeSelonBase(base).toPromise();
  }
   //à appeler via s.getTabChangeSelonBase.subscribe(...)
   public getTabChangeSelonBase(base : string) : Observable<object> {
    return this.getTabChangeSelonBaseEtDate(base,"latest");
   }

  public getTabChangeSelonBaseEtDate(base : string, date:any) : Observable<object> {
    let url="https://api.fixer.io/"+date+"?base="+base; 
    return this.http.get(url)
               .map((response)=>response.json()["rates"])
               .catch((e) => { 
                       return Observable.throw('error:' + e);});
  }

}
