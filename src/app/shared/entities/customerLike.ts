import { Type } from "./type";

export interface CustomerLike {
    gameId: number,
    gameName: string,
    gamePrice: number,
    image: string,
    type: Type, 
}