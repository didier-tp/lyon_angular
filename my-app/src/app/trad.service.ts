import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// service de traduction

@Injectable()
export class TradService {

  private codeLangage : string = "fr";//par defaut 

  //BehaviorSubject est un cas particulier de chose Observable
  //sur laquelle toute callback enregistreée via .subscribe()
  //sera automatiquement (ré)appelée dès que l'on appelle
  // .next(nouvelle_valeur)
  public bsCodeLangue = new BehaviorSubject(this.codeLangage);
  
  private tradMapFr = {
      'width' : 'largeur' ,
      'height' :'hauteur' 
  };

  private tradMapEn = {
    'width' : 'width' ,
    'height' :'height' 
 };

  
  private tradMap : object = this.tradMapFr;

  // de l'exterieur : service.codeLang = 'en' ; 
  public set codeLang(code: string) { 
    this.codeLangage = code;
    console.log("nouveau codeLangage:"+code);
    this.bsCodeLangue.next(this.codeLangage);//pour déclencher
                      // tous les subscribe()
    switch(code){
      case 'fr' : this.tradMap = this.tradMapFr; break;
      // case 'es' : this.tradMap = this.tradMapEs; break;
      // case 'de' : this.tradMap = this.tradMapDe; break;
      // case 'it' : this.tradMap = this.tradMapIt; break;
      case 'en' :  
      default : this.tradMap = this.tradMapEn;
    }
  }

  public get traductionMap() {
    return this.tradMap;
  }


  // de l'exterieur : cl = service.codeLang ; 
  public get codeLang() : string { 
    return this.codeLangage;
  }

  

  constructor() { }

}
