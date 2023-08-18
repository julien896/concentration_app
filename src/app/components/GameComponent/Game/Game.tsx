import { Card } from "react-bootstrap"

export const GameContainer = ({ children } : { children: React.ReactNode }) => (
    <div className="cards">
        {children}
    </div>
)

export const GameCard = ({ url } : { url: string }) => (
    <Card className="cards__card">
      <Card.Img variant="top" src={url}  />
    </Card>
)