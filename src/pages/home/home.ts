import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { FriendsPage } from '../friends/friends';
import { SlidesPage } from '../slides/slides';
import { PlacesPage } from '../places/places';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToPlaces(){
    this.navCtrl.push(PlacesPage);
  }
  goToSlides(){
    this.navCtrl.push(SlidesPage);
  }
  goToFriends(){
    this.navCtrl.push(FriendsPage);
  }
  goToAbout(){
    this.navCtrl.push(AboutPage, { 
      showID: '88',
      showName: 'Wichan Thumthong'
    });
  }
}
