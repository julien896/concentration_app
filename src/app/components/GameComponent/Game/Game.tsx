import { Card } from "react-bootstrap"

import question_mark from '../../../../assets/question_mark.svg'

export const GameContainer = ({ children } : { children: React.ReactNode }) => (
    <div className="cards">
        {children}
    </div>
)

export const GameCard = ({ url, onClick, isFlipped } : { url: string, onClick: () => void, isFlipped: boolean}) => (
    <div onClick={onClick} className={`gCard ${isFlipped && 'is-flipped'}`}>
      <Card className="gCard__face gCard__face--back">
        <Card.Img variant="bottom" src={question_mark} />
      </Card>
      <Card className="gCard__face gCard__face--front">
        <Card.Img variant="top" src={url} />
      </Card>
    </div>
)
