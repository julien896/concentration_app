import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StartComponent } from '../components/StartComponent'
import { StartRepository } from '../services/start-repository'
import { useMutation } from '@tanstack/react-query'

const repo = new StartRepository()

export const StartPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const usernameMutation = useMutation(repo.postUsername, {
    onSuccess: () => {
      navigate('/game')
      setUsername('')
    }
  });

  const handleSubmit = async () => {
    await usernameMutation.mutateAsync(username)
  }

  return (
    <StartComponent>
      <StartComponent.Title />
      <StartComponent.Input 
        value={username} 
        handleChange={e => setUsername(e.target.value)}
      />
      <StartComponent.Button 
        disabled={username.length <= 2 || usernameMutation.isLoading} 
        handleSubmit={handleSubmit}
        isLoading={usernameMutation.isLoading}
      />
    </StartComponent>
  )
}
