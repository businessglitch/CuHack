import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { Ticket } from "../../assets/models/tickets/ticket.interface";
import {Geolocation, GeolocationOptions, Geoposition} from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
/**
 * Generated class for the TicketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */  
declare var google;
@IonicPage()
@Component({
  selector: 'page-ticket-detail',
  templateUrl: 'ticket-detail.html',
})
export class TicketDetailPage {
	@ViewChild('map') mapElement: ElementRef;
	ticket: Ticket;
	geoposition: Geoposition;
	map: any;
	location: any;
  constructor(
  		private geolocation: Geolocation,
  		private platform: Platform,
   		public navParams: NavParams) {

  	console.log(this.navParams.data)
  }

  buyTicket() {

  }

  async getGeolocation() {
  	await this.platform.ready();

  	try {
  		this.geoposition = await this.geolocation.getCurrentPosition()
  		console.log(this.geoposition);
  	} catch(e) {
  		console.log(e)
  	}
  }

  ionViewWillLoad() {
  	this.ticket = this.navParams.data;
  }

  ionViewDidLoad(){
    this.loadMap();
  }
  
  	loadMap() {
  		this.geolocation.getCurrentPosition().then((position) => {
 
      		let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 			this.location  = latLng;
		     let mapOptions = {
		        center: latLng,
		        zoom: 15,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    }
 
      		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 			
		}, (err) => {
		    console.log(err);
		});
  	}

  	addMarker(){
		 let marker = new google.maps.Marker({
		    map: this.map,
		    animation: google.maps.Animation.DROP,
		    position: this.map.getCenter()
		});
 
  		let content = "<h4>Information!</h4>";         
 
  		this.addInfoWindow(marker, content);
	}

	addInfoWindow(marker, content){
 
	 	let infoWindow = new google.maps.InfoWindow({
	    	content: content
	  	});
 
	  	google.maps.event.addListener(marker, 'click', () => {
	    	infoWindow.open(this.map, marker);
	  	});
	}
}


