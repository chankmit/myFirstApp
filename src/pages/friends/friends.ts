import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  allfriends = [
    {
      id:1,
      name:"Wichan Thumthong",
      org:"Rambhai Barni Rajabhat University",
      phone:"0838888888",
      image:"assets/imgs/mypic.png",
    },
    {
      id:2,
      name:"Tobthong Chancharuen",
      org:"Rambhai Barni Rajabhat University",
      phone:"0837777777",
      image:"assets/imgs/ttc.jpg",
    },  
    {
      id:3,
      name:"Weerasak Pruksa",
      org:"Rambhai Barni Rajabhat University",
      phone:"0836666666",
      image:"assets/imgs/wrp.jpg",
    },  
    {
      id:4,
      name:"Natthakarn Pungkert",
      org:"Rambhai Barni Rajabhat University",
      phone:"0835555555",
      image:"assets/imgs/ntk.jpg",
    },
    {
      id:5,
      name:"Patikom Thongjing",
      org:"Rambhai Barni Rajabhat University",
      phone:"0834444444",
      image:"assets/imgs/ptk.jpg",
    }, 
  ];

}
