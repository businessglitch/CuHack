import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TICKETS_LIST } from "../../assets/mocks/tickets/tickets";
import { Ticket } from "../../assets/models/tickets/ticket.interface";
import { DataService } from "../../providers/data/data.service";
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	ticketsList:Ticket[] = TICKETS_LIST;
	favItemClass:string = 'heart-outline';

	constructor(public navCtrl: NavController) {
		console.log(this.ticketsList);
	}

	callTicketDetail(ticket) {
		this.navCtrl.push('TicketDetailPage',ticket);
	}

	buyTicket() {

	}

	addToFavourites(ticket) {

		if(!ticket.favourite) { 
      		ticket.favItemClass = 'heart' 
	      	ticket.favourite = true;
	      	//let bool = this.data.saveCoupon(this.authenticatedUser,item);
	      	// if(bool) {
	      	//   console.log("Coupon has been added to Favourites!");
	      	// } 
    	} else {
	      	ticket.favItemClass = 'heart-outline';
	      	ticket.favourite = false;
	      	//let bool = this.data.removeCoupon(this.authenticatedUser,item);
	      	// if(bool){
	       //  	console.log("Successfully removed the Coupon");
	      	// }
    	}
	}

}
