import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignupForm from './SignupForm';
import SocialComponent from './SocialComponent';

const SignupModal = (props) => {
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
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
        </Modal.Body>
        <Modal.Footer>
          <SocialComponent buttonText={"Continue"} />
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default SignupModal;