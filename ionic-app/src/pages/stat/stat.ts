import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChangeProvider } from "../../providers/change/change";


@Component({
  selector: 'page-stat',
  templateUrl: 'stat.html',
})
export class StatPage {

  constructor(public navCtrl: NavController , 
          public changeProvider :ChangeProvider) {
  }

  nbDevises :number = 2;
  deviseNames : string[] = [ 'USD', 'GBP'];
  base :string= "EUR";
  minYear : number=2015; //inclusive
  maxYear : number=2018; //inclusive

  private _defaultChartData : any[] = [
    {data: [1, 1], label: 'EUR'},
    {data: [1, 1], label: 'EUR'}
  ];
  private _dynChartData : any[] = []; 
  public chartData : any[] = this._defaultChartData;

  private _defaultChartLabels : string[] = ['2010', '2015'];
  public chartLabels : string[] = this._defaultChartLabels;
  public chartType : string = 'line'; // ou bar, radar, pie, polarArea, doughnut
  public chartLegend : boolean = true;
  public chartOptions : any = { scaleShowVerticalLines: false, responsive: true };


  onActualiser(){
    this.buildChartLabels();
    //étape A : construire dynamiquement un tableau de tableaux
    //de la bonne taille (avec temporairement des valeurs à 1 partout)
    this.buildDynChartDataWith_1();
    //étape B: appeler en boucle le web service
    //pour récupérer les bonnes valeurs
    //et les placer dans le tableau:
    for(let i=0; i<this.nbDevises;i++){
      for(let j=this.minYear;j<=this.maxYear;j++){
        this.changeProvider.getTabChangeSelonBaseEtDate(
                        this.base,""+j+"-01-01")
        .subscribe(
          (rates)=>{ this._dynChartData[i].data[j-this.minYear] 
                         = rates[this.deviseNames[i]] ;
                    /*this.logData() ;*/
                    if(i==this.nbDevises-1 && j==this.maxYear){
                      /* FIN DES BOUCLES ASYNCHRONES
                         --> etape C : switch & refresh */
                      this.switchToBuiltData();
                    }
                  },
          (error)=>console.log("error"+error)
        );
     } //end of for(j/year)
    } //end of for(i/deviseNames)
  }

  buildChartLabels(){
    let tabYearLabels = [];
    for(let j=this.minYear;j<=this.maxYear;j++){
      tabYearLabels.push(j.toString());
    }
    this.chartLabels=tabYearLabels;
  }

  switchToBuiltData(){
    //étape C: switch en mémoire vers le nouveau 
    //tableau construit et rempli
    //ce switch (de premier niveau) déclenche un refresh Angular
    this.chartData = this._dynChartData;
  }

  logData(){
    console.log( JSON.stringify(this.chartData ));
  }  

  buildDynChartDataWith_1(){
     //construire dynamiquement un tableau de tableaux
    //de la bonne taille (avec temporairement des valeurs à 1 partout)
    this._dynChartData=new Array<object>();
    for(let i=0; i<this.nbDevises;i++){
      this._dynChartData.push( { data: [] , label: this.deviseNames[i]});
      for(let j=this.minYear;j<=this.maxYear;j++){
        this._dynChartData[i].data.push(1);
      }
    }
  }

  
}
