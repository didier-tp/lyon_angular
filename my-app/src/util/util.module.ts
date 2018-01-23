import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsGroupComponent } from "../util/tabs-group/tabs-group.component";
import { TogglePanelComponent } from "./toggle-panel/toggle-panel.component";

@NgModule({
  imports: [
    CommonModule , FormsModule
  ],
  exports: [
    TabsGroupComponent , TogglePanelComponent
  ],
  declarations: [ TabsGroupComponent , TogglePanelComponent]
})
export class UtilModule { }
