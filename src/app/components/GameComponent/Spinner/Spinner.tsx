import { Spinner as Progress } from 'react-bootstrap';

export default function Spinner() {
  return (
    <div className='spinner'>
      <Progress className='spinner__element' animation="border" />
    </div>
  )
}