import { Button, Modal } from "react-bootstrap";

  export const EndModal = ({ 
    user,
    show,
    onRestart
  } : { 
    user: string;
    show: boolean;
    onRestart: () => void;
  }) => (
    <Modal className='modal' show={show} animation={false}>
      <Modal.Body className='modal__body'>
        <h4>
          Congratulations <strong>{user}</strong>, you've won!
        </h4>
        <h5>
          Do you want to start again?
        </h5>
        
      </Modal.Body>
      <Modal.Footer className="modal__footer">
        <Button variant="primary" size="lg" onClick={onRestart}>
          Play again
        </Button>
      </Modal.Footer>
    </Modal>
  )
  