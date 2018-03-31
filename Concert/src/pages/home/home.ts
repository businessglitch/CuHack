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

	addToFavourites(ticket) {

		this.http.post('http://172.17.76.82:3000/payments', {
			amount: 1,
			reference: 'r6',
			description: 'd'
		})
		.toPromise()
		.then(data => {
			console.log(data.text());
		});
	}

}
