import './App.css'
import { GameRepository } from './app/services/game-repository'
import { useQuery } from '@tanstack/react-query'

const repo = new GameRepository()

function App() {

  const { data: cards } = useQuery(repo.keys.cards(), () => repo.getCards())

  console.log(cards)

  return (
    <>
      Hola
    </>
  )
}

export default App
