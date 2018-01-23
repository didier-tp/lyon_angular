import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {
  ht : number = 0;
  taux : number = 20;
  tva : number ;
  ttc : number ;

  onCalculer(evt : any){
    console.log("libelle du bouton :" + evt.target.value);
    this.tva = this.ht * this.taux / 100;
    this.ttc = Number(this.ht) + Number(this.tva) ; 
  }

  constructor() { }

  ngOnInit() {
  }

}
