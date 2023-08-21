import { GameComponent } from '../components/GameComponent'
import { GameRepository } from '../services/game-repository'
import { useQuery } from '@tanstack/react-query'
import { useConcentrationLogic } from '../hooks/useConcentrationLogic'

const repo = new GameRepository()

export const GamePage = () => {
  const { data: cards, isLoading } = useQuery(repo.keys.cards(), () => repo.getCards())

  const { flippedCards, currentResults, onFlipCard } = useConcentrationLogic(cards!);

  return (
    <GameComponent>
        <GameComponent.Container>
            {cards?.map((card, index) => (
                <GameComponent.Card
                  onClick={() => onFlipCard(index)}
                  isFlipped={
                    flippedCards.includes(index) || 
                    currentResults.matchedPairs.includes(card.uuid)
                  }
                  key={index} 
                  url={card.url}
                />
            ))}
        </GameComponent.Container>
    </GameComponent>
  )
}
