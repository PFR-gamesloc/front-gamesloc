import {CustomerOpinionDto} from "./CustomerOpinionDto";


export interface Commentary {
  comment: string,
  rating: number,
  publishDate: Date,
  customer : CustomerOpinionDto

}
