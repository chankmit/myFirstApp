import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  allSlides = [
    {
      id:1,
      name:"Show Slide No.1",
      detail:"Rambhai Barni Rajabhat University", 
      image:"http://www.wunca.uni.net.th/wunca35/slim/img/pic/0-first-1024.jpg",
    },{
      id:2,
      name:"Show Slide No.2",
      detail:"Rambhai Barni Rajabhat University", 
      image:"http://www.wunca.uni.net.th/wunca35/slim/img/pic/advice1_1024.jpg",
    },{
      id:3,
      name:"Show Slide No.3",
      detail:"Rambhai Barni Rajabhat University", 
      image:"http://www.wunca.uni.net.th/wunca35/slim/img/pic/advice2_1024.jpg",
    },
  ];
  
}
