import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { StartComponent } from '../components/StartComponent'

export const StartPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const handleSubmit = () => {
    localStorage.setItem('concentration_user', username)

    setTimeout(() => {
      navigate('/game')
      setUsername('')
    }, 1000);
  }

  return (
    <StartComponent>
      <StartComponent.Title />
      <StartComponent.Input 
        value={username} 
        handleChange={e => setUsername(e.target.value)}
      />
      <Button 
        type='submit'
        variant="secondary"
        onClick={handleSubmit}
        disabled={username.length <= 2}
      >
        Lets Play!
      </Button>
    </StartComponent>
  )
}
