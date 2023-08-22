import { GameComponent } from '../components/GameComponent'
import { GameRepository } from '../services/game-repository'
import { useQuery } from '@tanstack/react-query'
import { useConcentrationLogic } from '../hooks/useConcentrationLogic'
import { useEffect, useState } from 'react'

const repo = new GameRepository()

export const GamePage = () => {
  const getCardsQuery = useQuery(repo.keys.cards(), () => repo.getCards())
  const { data: cards, isLoading } = getCardsQuery

  const { 
    flippedCards, 
    currentResults, 
    onFlipCard, 
    restartGame,
  } = useConcentrationLogic(cards!)

  const { hits, errors, matchedPairs } = currentResults

  const [endModal, setEndModal] = useState(false)
  const modalOpen = () => setEndModal(!endModal)

  const onRestart = () => {
     modalOpen()
     restartGame()
     getCardsQuery.refetch()
  }

  useEffect(() => {
    if (cards && matchedPairs?.length === cards.length / 2) {
      setTimeout(() => {
        modalOpen()
      }, 1300);
    }
  }, [matchedPairs])

  return (
    <GameComponent>
        {isLoading ? 
          <GameComponent.Spinner /> 
        :
          <>
            <GameComponent.Info>
              <GameComponent.InfoElement 
                title='Hits'
                value={hits}
              />
              <GameComponent.InfoElement 
                title='Errors'
                value={errors}
              />
            </GameComponent.Info>
            <GameComponent.Container>
                {cards?.map((card, index) => (
                    <GameComponent.Card
                      key={index} 
                      onClick={() => onFlipCard(index)}
                      isFlipped={
                        flippedCards.includes(index) || 
                        matchedPairs.includes(card.uuid)
                      }
                      url={card.url}
                      matchAnimation={matchedPairs.includes(card.uuid) ? 'matched' : ''}
                    />
                ))}
            </GameComponent.Container>
          </>
        }
        <GameComponent.EndModal 
          show={endModal}
          user={localStorage.getItem('concentration_user')!}
          onRestart={onRestart}
        />
    </GameComponent>
  )
}
