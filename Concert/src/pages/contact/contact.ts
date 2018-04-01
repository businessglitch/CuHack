import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ACCOUNTS_LIST } from "../../assets/mocks/accounts/accounts";
import { Account } from "../../assets/models/accounts/account.interface";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	account:Account;
	constructor(public navCtrl: NavController) {

	}

	ionViewWillLoad(){
		this.account=ACCOUNTS_LIST[0]
		console.log(this.account);
	}
}
