import { useState } from 'react';
import { FcBiohazard } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ToastDltBtn() {
  const [smShow, setSmShow] = useState(false);
  

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="position-absolute bottom-0 end-0" id="myElement" >
        X
      </Button>
     
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        dialogClassName="modal-w100"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title className="contained-modal-title-vcenter">
          <FcBiohazard/>Delete<FcBiohazard/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>You are going to delete a property from the database.</Modal.Body>
        <Modal.Footer>
          <Button variant="warning">Understood</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ToastDltBtn;














