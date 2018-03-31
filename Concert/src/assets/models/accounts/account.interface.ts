export interface Account {
	name: string;
    email: string;
    password: string;
    address: string;
    id: number;
    sold: number[];
    bought: number[];
    pending: number[];
}