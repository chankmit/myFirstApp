import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToursProvider } from '../../providers/tours/tours';


@IonicPage()
@Component({
  selector: 'page-placedetail',
  templateUrl: 'placedetail.html',
})
export class PlacedetailPage {
  
  place:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ToursProvider) {
    this.data.getByID(this.navParams.get('code')).then(result => {
      this.place = result;
    });
  }

}
