import { GameCard, GameContainer } from './Game/Game';

export const GameComponent = ({ 
    children
} : { 
    children: React.ReactNode 
}) => (
    <>{children}</>
)

GameComponent.Container = GameContainer
GameComponent.Card = GameCard