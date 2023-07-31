import { Address } from "./address";

export interface Customer {
    customerId: number,
    firstName: string,
    lastName: string, 
    password: string, 
    email: string, 
    phoneNumber: string, 
    addressId: Address
}