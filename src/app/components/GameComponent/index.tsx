import { BoardContainer, BoardCard } from './Board/Board';

export const GameComponent = ({ 
    children
} : { 
    children: React.ReactNode 
}) => (
    <>{children}</>
)

GameComponent.Container = BoardContainer
GameComponent.Card = BoardCard