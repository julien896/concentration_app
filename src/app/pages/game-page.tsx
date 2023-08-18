import React from 'react'
import { GameRepository } from '../services/game-repository'
import { useQuery } from '@tanstack/react-query'

const repo = new GameRepository()

export const GamePage = () => {
  const { data: cards } = useQuery(repo.keys.cards(), () => repo.getCards())

  return (
    <div>GamePage</div>
  )
}
