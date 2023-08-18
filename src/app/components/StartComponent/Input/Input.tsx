import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ( { value, handleChange }: Props ) => {
  return (
    <Form.Control
      placeholder="Username"
      value={value}
      onChange={handleChange}
    />
  )
}
