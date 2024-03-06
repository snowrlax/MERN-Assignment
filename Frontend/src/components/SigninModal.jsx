import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SocialComponent from './SocialComponent';
import SigninForm from './SigninForm';

const SigninModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a variant="primary" onClick={handleShow} style={{ cursor: "pointer" }}>
        It's free
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton className='col-12'>
          <Modal.Title>Signin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SigninForm />
        </Modal.Body>
        <Modal.Footer>
          <SocialComponent buttonText={"Continue"} />
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default SigninModal;