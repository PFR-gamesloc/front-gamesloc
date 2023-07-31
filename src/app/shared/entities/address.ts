import { City } from "./city";

export interface Address {
    addressId: number,
    numberAddress: number, 
    complementaryNumber: string, 
    streetName: string, 
    complementaryAddress: string, 
    city: City
}
