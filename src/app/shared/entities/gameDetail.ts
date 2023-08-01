import { Editor } from "./editor"
import { Language } from "./language"
import { Tag } from "./tag"
import { Type } from "./type"

export interface GameDetail {
    gameId: number,
    gameName: string,
    gameDescr: string,
    gamePrice: number,
    image: string,
    minPlayer: number,
    maxPlayer: number,
    minAge:number,
    editor: Editor,
    languages: Language[]
    type: Type,
    tags: Tag[],
}
