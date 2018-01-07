import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import { PlacedetailPage } from '../placedetail/placedetail';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  tours:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.tours = data.data.children;
    });
  }

  ShowDetail(id){
    this.navCtrl.push(PlacedetailPage,{code:id});
  }
}
