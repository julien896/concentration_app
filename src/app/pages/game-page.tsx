import { GameComponent } from '../components/GameComponent'
import { GameRepository } from '../services/game-repository'
import { useQuery } from '@tanstack/react-query'

const repo = new GameRepository()

export const GamePage = () => {
  const { data: cards } = useQuery(repo.keys.cards(), () => repo.getCards())

  return (
    <GameComponent>
        <GameComponent.Container>
            {cards?.map((card, index) => (
                <GameComponent.Card
                  key={index} 
                  url={card.url}
                />
            ))}
        </GameComponent.Container>
    </GameComponent>
  )
}
