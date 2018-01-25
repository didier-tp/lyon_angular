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
import { WelcomeComponent } from './welcome/welcome.component';
import { Partie1Component } from './partie1/partie1.component';
import { Partie2Component } from './partie2/partie2.component';
import { AppRoutingModule } from "./app-routing.module";
import { DetailComponent } from './partie2/detail/detail.component';
import { GeneralComponent } from './partie2/general/general.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { EmpruntService } from "./emprunt.service";

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    RectComponent,
    MyheaderComponent,
    InscriptionComponent,
    WelcomeComponent,
    Partie1Component,
    Partie2Component,
    DetailComponent,
    GeneralComponent,
    EmpruntComponent
  ],
  imports: [
    BrowserModule , HttpModule,FormsModule ,
     UtilModule , AppRoutingModule
  ],
  providers: [ TradService , InscriptionService , EmpruntService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
