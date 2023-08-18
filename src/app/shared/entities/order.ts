import {Game} from "./game";
import {Customer} from "./customer";

export interface Order {
    orderId: Number,
    orderDate: Date,
    returnDate: Date,
    price: Number,
    customer: Customer,
    games:Game[]
}
