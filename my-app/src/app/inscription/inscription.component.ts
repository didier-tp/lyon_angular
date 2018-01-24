import { Component, OnInit } from '@angular/core';
import { InscriptionService } from "../inscription.service";
import { Inscription } from "../inscription";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptions : Inscription[] ; 

  constructor(private inscriptionService : InscriptionService) { }

  onRechercheInscriptions(){
      this.inscriptionService.getInscriptionsObservable()
          .subscribe(
               tabInscriptions => this.inscriptions = tabInscriptions ,
               e => console.log("error :" + e)
          );
  }

  ngOnInit() {
  }

}
