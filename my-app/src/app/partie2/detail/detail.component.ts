import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  numeroProd : number ; //à afficher via {{numeroProd}}

  constructor(private _route : ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params : Params) => { this.numeroProd 
                            = Number( params['prodId'] ) ;}
      // prodId correspond à path: 'detail/:prodId' ...
    );
  }

}
