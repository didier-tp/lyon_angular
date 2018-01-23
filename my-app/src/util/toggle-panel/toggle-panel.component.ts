import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.css']
})
export class TogglePanelComponent implements OnInit {

  toggleP : boolean =false;

  @Input()
  title : string = 'default panel title';

  constructor() { }

  ngOnInit() {
  }

}

/*
exemple d'utilisation:

<toggle-panel [title]="'panel1'" >
		<app-part1></app-part1> ou ...
	</toggle-panel>
	  
	<toggle-panel [title]="'panel2'" >
		<div>contenu du paneau 2</div>
	</toggle-panel>

*/
