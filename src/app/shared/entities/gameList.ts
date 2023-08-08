
import { Editor } from "./editor"
import { Language } from "./language"
import { Tag } from "./tag"
import { Type } from "./type"

export interface GameList {
    gameId: number,
    gameName: string,
    gameDescr: string,
    stock: number,
    gamePrice: number,
    minPlayer: number, 
    maxPlayer: number, 
    minAge: number, 
    image: string,
    editor: Editor,
    type: Type, 
    languages: Language[], 
    tags: Tag[]
}

