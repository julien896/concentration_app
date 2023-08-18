import { Title } from "./Title/Title"
import { Input } from './Input/Input';


export const StartComponent = ({ 
    children
} : { 
    children: React.ReactNode 
}) => (
    <>
      {children}
    </>
)

StartComponent.Title = Title
StartComponent.Input = Input
