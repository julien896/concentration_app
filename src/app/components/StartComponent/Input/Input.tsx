import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ( { value, handleChange }: Props ) => {
  return (
    <div className='input-container'>
      <Form.Control
        className='input-container__input'
        placeholder="Username"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
