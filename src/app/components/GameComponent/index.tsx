import { BoardContainer, BoardCard } from './Board/Board';
import { EndModal } from './EndModal/EndModal';
import { Info, InfoElement } from './Info/Info';
import Spinner from './Spinner/Spinner';

export const GameComponent = ({ 
    children
} : { 
    children: React.ReactNode 
}) => (
    <>{children}</>
)

GameComponent.Container = BoardContainer
GameComponent.Card = BoardCard
GameComponent.Info = Info
GameComponent.InfoElement = InfoElement
GameComponent.Spinner = Spinner
GameComponent.EndModal = EndModal