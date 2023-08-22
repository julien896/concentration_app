import { Spinner, Button as SubmitButton } from 'react-bootstrap'

interface Props {
    handleSubmit: () => void;
    disabled: boolean;
    isLoading: boolean;
}

export const Button = ( { handleSubmit, disabled, isLoading }: Props ) => {
  return (
      <SubmitButton 
        className='submit-button'
        type='submit'
        variant="secondary"
        onClick={handleSubmit}
        disabled={disabled}
      >
        {!isLoading ?
        'Lets Play!' :
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />}
      </SubmitButton>
  )
}