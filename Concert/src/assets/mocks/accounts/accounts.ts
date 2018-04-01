import { Account } from "../../models/accounts/account.interface";

const accountsList: Account[] = [
    {name:"Fahad Hayat",email:"admin@admin.com",avatar:"https://avatar.url",password: "admin", address:" 3325 Uplands drive", id: 2, sold:[2,3,6], bought:[], pending:[]}  
]   

 export const ACCOUNTS_LIST = accountsList;