import { Injectable } from '@angular/core';

@Injectable()
export class EmpruntService {

  constructor() { }

  calculMens(montant , tauxAnnuel , nbMois ):number{
    let tauxMensuel = tauxAnnuel / 12; //taux mensuel
    return (montant * tauxMensuel) /
            ( 1 - Math.pow(1+tauxMensuel , -nbMois) );
  }

}
