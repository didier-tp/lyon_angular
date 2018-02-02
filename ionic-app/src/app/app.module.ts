import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { ConversionPage } from "../pages/conversion/conversion";
import { ChangeProvider } from '../providers/change/change';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MeteoProvider } from '../providers/meteo/meteo';
import { StatPage } from "../pages/stat/stat";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ConversionPage,
    HomePage,
    StatPage,
    TabsPage
  ],
  imports: [
    BrowserModule, HttpModule , FormsModule,ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ConversionPage,
    HomePage,
    StatPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    MeteoProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChangeProvider,
    MeteoProvider
  ]
})
export class AppModule {}
