import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ticket } from "../../assets/models/tickets/ticket.interface";

/**
 * Generated class for the TicketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-detail',
  templateUrl: 'ticket-detail.html',
})
export class TicketDetailPage {
	ticket: Ticket;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.navParams.data)
  }

  ionViewWillLoad() {
  	this.ticket = this.navParams.data;
  }
  

}
