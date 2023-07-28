import { City } from "./city";

export interface Address {
    address_id: number,
    number_address: number, 
    complementary_number: string, 
    street_name: string, 
    complementary_address: string, 
    city: City
}
