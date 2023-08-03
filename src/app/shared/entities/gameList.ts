
import { Editor } from "./editor"
import { Type } from "./type"

export interface GameList {
    gameId: number,
    gameName: string,
    gameDescr: string,
    gamePrice: number,
    image: string,
    editor: Editor,
    type: Type
}

