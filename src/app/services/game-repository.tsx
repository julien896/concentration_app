import api from "./api";
import { Card, Entry, ICard } from "../models/Card";

export const getCardsMapper = (x: ICard): Card => new Card(x);

export class GameRepository {
  keys = {
    cards: () => ["cards"],
  };

  getCards = async () => {
    const shuffled = (array: Card[]) => array.sort(() => Math.random() - 0.5) 
    
    const response = await api.get(`/content/spaces/animals/types/game/entries?per_page=20`);

    const cards = response.data.entries.map((entry: Entry) => ({ 
      url: entry.fields.image.url, 
      uuid: entry.fields.image.uuid
    }));

    const mapped_cards = cards.map(getCardsMapper)

    return shuffled([...mapped_cards, ...mapped_cards]);
  };
}