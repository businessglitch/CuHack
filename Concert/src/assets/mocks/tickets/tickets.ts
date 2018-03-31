import { Ticket } from "../../models/tickets/ticket.interface";
import { Concert } from "../../models/concerts/concert.interface";
import { CONCERTS_LIST } from "../concerts/concerts";

const concertsList: Concert[] = [
    {title:"Jay Z concert",address: "Bell Center Toronto Ontario",timestamp: "28th August 2018"},
    {title:"Bluesfest",address: "Downtown Ottawa",timestamp: "26th July 2018"},
    {title:"Drake Tour",address: "Canadian Tire Center, Kanata",timestamp: "20th September 2018"},
    {title:"Justin Bieber Tour",address: "Bell Center Toronto Ontario",timestamp: "20th August 2018"},
    {title:"Selena Gomez Tour",address: "Bell Center Toronto Ontario",timestamp: "13th August 2018"},
   
 ]   

const ticketsList: Ticket[] = [
    {image:"assets/img/tide.png",title: "First Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 1, concert: concertsList[0]},
    {image:"assets/img/tide.png",title: "Second Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 2, concert: concertsList[1]},
    {image:"assets/img/tide.png",title: "Third Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 2, concert: concertsList[1]},
    {image:"assets/img/tide.png",title: "Fourth Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 3, concert: concertsList[2]},
    {image:"assets/img/tide.png",title: "Fifth Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 1, concert: concertsList[4]},
    {image:"assets/img/tide.png",title: "Sixth Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId : 2, concert: concertsList[3]},
    {image:"assets/img/tide.png",title: "Seventh Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline',sellerId: 4, concert: concertsList[0]}
    
 ]   

 export const TICKETS_LIST = ticketsList;