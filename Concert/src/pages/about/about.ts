import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TICKETS_LIST } from "../../assets/mocks/tickets/tickets";
import { Ticket } from "../../assets/models/tickets/ticket.interface";
import { Concert } from "../../assets/models/concerts/concert.interface";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	concert:Concert = {title:"",address: "",timestamp: ""}
	ticket:Ticket = {image:"",description: "",price: 0.00,favourite:false,favItemClass: 'heart-outline', sellerId: 1, concert: this.concert, Id: 8}

  constructor(public navCtrl: NavController) {

  }

}
