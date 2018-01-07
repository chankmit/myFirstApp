import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { FriendsPage } from '../pages/friends/friends';
import { SlidesPage } from '../pages/slides/slides';
import { PlacesPage } from '../pages/places/places';
import { PlacedetailPage } from '../pages/placedetail/placedetail';
import { ToursProvider } from '../providers/tours/tours';
import { TourismProvider } from '../providers/tourism/tourism'; 
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    FriendsPage,
    SlidesPage,
    PlacesPage,
    PlacedetailPage
  ],
  imports: [ 
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    FriendsPage,
    SlidesPage,
    PlacesPage,
    PlacedetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToursProvider,
    TourismProvider
  ]
})
export class AppModule {}
