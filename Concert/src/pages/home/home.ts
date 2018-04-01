import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TICKETS_LIST } from "../../assets/mocks/tickets/tickets";
import { Ticket } from "../../assets/models/tickets/ticket.interface";
import { DataService } from "../../providers/data/data.service";
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Events } from 'ionic-angular';
import { Http, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	ticketsList:Ticket[] = TICKETS_LIST;
	favItemClass:string = 'heart-outline';

	constructor(public navCtrl: NavController, public http: Http) {
		console.log(this.ticketsList);
	}	

	callTicketDetail(ticket) {
		this.navCtrl.push('TicketDetailPage',ticket);
	}

	buyTicket(ticket) {
		const amount = ticket.price * 100;
		const reference = ticket.Id.toString() + ticket.sellerId.toString();
		const description = ticket.description;

		this.http.post('http://192.168.2.21:3000/payments', {
			amount: amount,
			reference: reference,
			description: description
		})
		.toPromise()
		.then(data => {
			const response = JSON.parse(data.text());
			const appUrl = response.appUrl;
			const messengerUrl = response.messengerUrl;

			console.log(appUrl);
			console.log(messengerUrl);

			// TODO: open appUrl or messengerUrl
		})
		.catch(error => {
			console.log(error.status);
		});
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
