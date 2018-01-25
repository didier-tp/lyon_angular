import { Component, OnInit } from '@angular/core';
import { EmpruntService } from "../emprunt.service";

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {

  montant : number = 10000;
  nbAnnees : number = 10;
  tauxAnnuelPct : number = 2.5; // en % ( à diviser par 100)

  mensualite : number; //à calculer

  constructor(private _empruntService : EmpruntService) { }

  onCalculerMensualite(){
    this.mensualite = 
       this._empruntService.calculMens(this.montant, 
                                       this.tauxAnnuelPct / 100 ,
                                       this.nbAnnees * 12);
  }

  ngOnInit() {
  }

}
