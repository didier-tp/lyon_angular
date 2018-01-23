import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.css']
})
export class TabsGroupComponent implements OnInit {
	
  @Input()
  titles : string[] = [];

  activeTabTitle : string;

  @Output()
  activeTabEvent : EventEmitter<{ value : string}> = new EventEmitter();

  onChangeActiveTab(selectedTabTitle){
    this.activeTabTitle = selectedTabTitle;
    this.activeTabEvent.emit({value: this.activeTabTitle});
  }

  constructor() { }

  ngOnInit() {
    if(this.titles.length >=1 ){
       this.activeTabTitle = this.titles[0];
       this.activeTabEvent.emit({value: this.activeTabTitle});
    }
  }

}

/*
exemple d'utilisation:

<tabs-group [titles]="['t1' , 't2' , 't3']"
  (activeTabEvent)="selTab=$event.value">
<div [style.display]="selTab=='t1'?'block':'none'">aaa</div>
<div [style.display]="selTab=='t2'?'block':'none'">bbb</div>
<div [style.display]="selTab=='t3'?'block':'none'">ccc</div>
</tabs-group>


*/
