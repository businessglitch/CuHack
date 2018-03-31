import { Ticket } from "../../models/tickets/ticket.interface";
import { CONCERTS_LIST } from "../../mocks/concerts/concerts";

const ticketsList: Ticket[] = [
    {image:"assets/img/tide.png",title: "First Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 1, concert:CONCERTS_LIST[0]},
    {image:"assets/img/tide.png",title: "Second Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 2, concert:CONCERTS_LIST[1]},
    {image:"assets/img/tide.png",title: "Third Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 2, concert:CONCERTS_LIST[1]},
    {image:"assets/img/tide.png",title: "Fourth Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 3, concert:CONCERTS_LIST[2]},
    {image:"assets/img/tide.png",title: "Fifth Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId: 1, concert:CONCERTS_LIST[4]},
    {image:"assets/img/tide.png",title: "Sixth Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline', sellerId :2, concert:CONCERTS_LIST[3]},
    {image:"assets/img/tide.png",title: "Seventh Ticket",description: "The Sample Data goes Here",price: 13.00,favourite:false,favItemClass: 'heart-outline',sellerId: 4, concert:CONCERTS_LIST[0]}
    
 ]   

 export const TICKETS_LIST = ticketsList;