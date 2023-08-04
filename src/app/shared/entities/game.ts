import { Editor } from "./editor";
import { Language } from "./language";
import { Tag } from "./tag";
import { Type } from "./type";

export interface Game {
    gameId: number,
    gameName: string,
    gameDescr: string,
    stock: number,
    gamePrice: number,
    image: string,
    minPlayer: number,
    maxPlayer: number,
    minAge: number, 
    type: Type, 
    editor: Editor, 
    languages: Language[], 
    tags: Tag[], 
}
