import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  showID :any;
  showName : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showID = this.navParams.get('showID');
    this.showName = this.navParams.get('showName');
  }
}
