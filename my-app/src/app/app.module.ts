import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TvaComponent } from './tva/tva.component';
import { RectComponent } from './rect/rect.component';
import { UtilModule } from "../util/util.module";
import { MyheaderComponent } from './myheader/myheader.component';
import { TradService } from "./trad.service";
import { HttpModule } from '@angular/http';
import './rxjs-extensions';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionService } from "./inscription.service";

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    RectComponent,
    MyheaderComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule , HttpModule,FormsModule , UtilModule
  ],
  providers: [ TradService , InscriptionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
