
export interface GameEditDto {
    gameId: number,
    gameName: string,
    gameDescr: string,
    gamePrice: number,
    image: string,
    minPlayer: number,
    maxPlayer: number,
    minAge:number,
    stock : number,
    editorId: number,
    languagesId: number[]
    typeId: number,
    tagsId: number[],
}
