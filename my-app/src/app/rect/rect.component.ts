import { Component, OnInit } from '@angular/core';
import { Rectangle } from "../rectangle";

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {

  rectangle : Rectangle = new Rectangle();
  perimetre : number;
  aire : number;

  onCalculer(evt : any){
    this.perimetre = this.rectangle.perimetre();
    this.aire = this.rectangle.aire();
  }

  constructor() { }

  ngOnInit() {
  }

}
