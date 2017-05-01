import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Tabs } from '../pages/tabs/tabs';
import { Favorites } from '../pages/favorites/favorites';
import { Quotes } from '../pages/quotes/quotes';
import { Quote } from '../pages/quote/quote';
import { Library } from '../pages/library/library';
import { Settings } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    Tabs,
    Favorites,
    Library,
    Settings,
    Quotes,
    Quote
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tabs,
    Favorites,
    Library,
    Settings,
    Quotes,
    Quote
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
