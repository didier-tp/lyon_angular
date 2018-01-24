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
  nouvelleInscription : Inscription = new  Inscription;
  numReg : string =null;

  constructor(private inscriptionService : InscriptionService) { }

  callBackInscriptionBienAjoutee(inscriptionAjoutee : Inscription){
     console.log("bien ajoute: "   + inscriptionAjoutee );
  }

  callBackError(e){
    console.log("error :" + e);
  }

  onPostInscription(){
    this.inscriptionService.postInscriptionObservable(
                                  this.nouvelleInscription)
        .subscribe(
             this.callBackInscriptionBienAjoutee ,
             this.callBackError
        );
}

  onRechercheInscriptions(){
      this.inscriptionService.getInscriptionsObservable(this.numReg)
          .subscribe(
               tabInscriptions => this.inscriptions = tabInscriptions ,
               e => console.log("error :" + e)
          );
  }

  ngOnInit() {
  }

}
