import { useState } from 'react';
import { Card } from '../models/Card';

interface IResults {
  matchedPairs: string[];
  hits: number;
  errors: number;
}

export function useConcentrationLogic(cards: Card[]) {

  const initialState = {
    matchedPairs: [],
    hits: 0,
    errors: 0
  }

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [currentResults, setCurrentResults] = useState<IResults>(initialState)
  
  const onFlipCard = (index: number) => {
    const isNotMatch = !currentResults.matchedPairs.includes(cards![index].uuid)

    if (flippedCards.length === 1 && !flippedCards.includes(index) && isNotMatch) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
      setTimeout(() => checkForMatch([...flippedCards, index]), 1200);
    } else if (flippedCards.length === 0 && isNotMatch) {
      setFlippedCards([index]);
    }
  };

  const checkForMatch = (currentFlippedCards: number[]) => {
    if (currentFlippedCards.length === 2) {
      const [index1, index2] = currentFlippedCards
      const card1 = cards![index1]
      const card2 = cards![index2]

      if (card1.uuid === card2.uuid) {
        setCurrentResults(prevResults => ({
          ...prevResults,
          matchedPairs: [...prevResults.matchedPairs, card1.uuid],
          hits: prevResults.hits + 1
        }))

      } else {
        setCurrentResults(prevResults => ({
          ...prevResults,
          errors: prevResults.errors + 1
        }))
      } 

      setFlippedCards([]);
    }
  };

  const restartGame = () => {
    setFlippedCards([])
    setCurrentResults(initialState)
  }

  return {
    flippedCards,
    onFlipCard,
    currentResults,
    restartGame,
  };
}