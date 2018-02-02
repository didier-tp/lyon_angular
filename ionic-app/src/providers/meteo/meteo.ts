//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';


@Injectable()
export class MeteoProvider {

  constructor(public http: Http) {
    console.log('Hello MeteoProvider Provider');
  }

   //à appeler via s.getTabChangeSelonBase.subscribe(...)
   public getMeteoSelonCoordGps(long : number , lat : number) : Observable<object> {
   // http://samples.openweathermap.org/data/2.5
    let tempApiKey="3e9acdb6c97a969120841254f7824eb8";
    //let url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long
    let url="./weather?lat="+lat+"&lon="+long
    +"&appid="+tempApiKey;
    

    console.log("url="+url);
    return this.http.get(url)
               .map((response)=>response.json())
               .catch((e) => { 
                       return Observable.throw('error:' + e);});
  }

}
