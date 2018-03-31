import { Account }  from '../accounts/account.interface';
import { Concert }  from '../concerts/concert.interface';

export interface Ticket {
    image: string;
    title: string;
    description: string;
    price: number;
    favourite: boolean;
    favItemClass: string;
    sellerId: number;
    concert: Concert;
}