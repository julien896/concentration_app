export interface Image {
  image: ICard
}

export interface Entry {
  fields: Image
}

export interface ICard {
  uuid: string;
  url: string
}
    
export class Card {
  uuid: string;
  url: string;
  
  constructor(args: ICard) {
    this.uuid = args.uuid;
    this.url = args.url;
  }
}