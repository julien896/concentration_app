import { useState } from 'react'
import { GameComponent } from '../components/GameComponent'
import { GameRepository } from '../services/game-repository'
import { useQuery } from '@tanstack/react-query'

const repo = new GameRepository()

export const GamePage = () => {
  const { data: cards } = useQuery(repo.keys.cards(), () => repo.getCards())

  const [flippedCards, setFlippedCards] = useState([])

  const handleCardClick = (index: number) => {
    setFlippedCards(prevFlippedCards => {
      const newFlippedCards = [...prevFlippedCards]
      newFlippedCards[index] = !newFlippedCards[index]
      return newFlippedCards;
    });
  };
  
  return (
    <GameComponent>
        <GameComponent.Container>
            {cards?.map((card, index) => (
                <GameComponent.Card
                  onClick={() => handleCardClick(index)}
                  isFlipped={!!flippedCards[index]}
                  key={index} 
                  url={card.url}
                />
            ))}
        </GameComponent.Container>
    </GameComponent>
  )
}
