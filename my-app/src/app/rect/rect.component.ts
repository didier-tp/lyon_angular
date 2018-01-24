import { Component, OnInit } from '@angular/core';
import { Rectangle } from "../rectangle";
import { TradService } from "../trad.service";

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {

  rectangle : Rectangle = new Rectangle();
  perimetre : number;
  aire : number;

  copieLangueChoisie : string;
  rectangleEnJson : string;

  onCalculer(evt : any){
    this.rectangleEnJson = JSON.stringify(this.rectangle);
    this.perimetre = this.rectangle.perimetre();
    this.aire = this.rectangle.aire();
  }

  constructor(public tradService : TradService) {
      //ne surtout pas ecrire tradService = new TradService();
      //car angular le fait déjà en mieux (avec prise en compte des
      // choses à initialiser et préfixées par @....)
      this.copieLangueChoisie = tradService.codeLang;
      
      this.tradService.bsCodeLangue.subscribe(
        (nouveauCodeLangue)=>{ 
             this.copieLangueChoisie = nouveauCodeLangue;
             console.log("copieLangueChoisie:" 
                     + this.copieLangueChoisie);
             }
      );
    }

  ngOnInit() {
  }

}
