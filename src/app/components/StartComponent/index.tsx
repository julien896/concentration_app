import { Title } from "./Title/Title"
import { Input } from './Input/Input';
import { Button } from "./Button/Button";


export const StartComponent = ({ 
    children
} : { 
    children: React.ReactNode 
}) => (
    <div className="start-page">
      {children}
    </div>
)

StartComponent.Title = Title
StartComponent.Input = Input
StartComponent.Button = Button
