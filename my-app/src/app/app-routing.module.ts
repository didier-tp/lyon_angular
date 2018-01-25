import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { Partie1Component } from "./partie1/partie1.component";
import { Partie2Component } from "./partie2/partie2.component";
import { DetailComponent } from "./partie2/detail/detail.component";
import { GeneralComponent } from "./partie2/general/general.component";
import { EmpruntComponent } from "./emprunt/emprunt.component";

const routes: Routes = [
{ path: 'welcome', component: WelcomeComponent },
{ path: '', redirectTo: '/welcome', pathMatch: 'full'},
{ path: 'partie1', component: Partie1Component } ,
{ path: 'partie2' ,component: Partie2Component ,
  children  : [
    { path: 'detail/:prodId', component: DetailComponent },
    { path: 'general', component: GeneralComponent },
    { path: '', redirectTo: 'general', pathMatch: 'prefix'}
  ]
},
{ path: 'emprunt', component: EmpruntComponent }
];
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule {}