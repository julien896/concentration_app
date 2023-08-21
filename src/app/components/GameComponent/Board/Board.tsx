import { Card } from "react-bootstrap"
import { BiQuestionMark } from 'react-icons/bi';

export const BoardContainer = ({ children } : { children: React.ReactNode }) => (
  <div className="cards">
      {children}
  </div>
)

export const BoardCard = ({ 
  url, 
  onClick, 
  isFlipped,
} : { 
  url: string, 
  onClick: () => void, 
  isFlipped: boolean,
}) => (
  <div onClick={onClick} className={`gCard ${isFlipped && 'is-flipped'}`}>
    <Card className="gCard__face gCard__face--back">
      <BiQuestionMark size={80} />
    </Card>
    <Card className="gCard__face gCard__face--front">
      <Card.Img variant="top" src={url} alt="Card" />
    </Card>
  </div>
)
