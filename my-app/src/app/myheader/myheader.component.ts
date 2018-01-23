import { Component, OnInit, Input } from '@angular/core';
import { TradService } from "../trad.service";

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  @Input()
  title : string = "default title";

  date : Date;

  langueChoisie : string = 'fr'; // <select [(ngModel)]="langueChoisie"

  onChangeLangue(/*evt*/){
      //nb tradService.codeLang est codé comme set codeLang(...)
      this.tradService.codeLang = this.langueChoisie;
                                  /* ou bien evt.target.value */
  }

  constructor(private tradService : TradService) {
    this.date = new Date();
    console.log("dans constructor title:" + this.title);
    this.tradService.codeLang = this.langueChoisie;
   }


  ngOnInit() {
    console.log("dans ngOnInit title:" + this.title);
  }

}
