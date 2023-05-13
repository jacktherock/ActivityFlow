import React, { useState } from 'react'
import GetProfile from './GetProfile';
import { Container, Button, Modal, Form } from 'react-bootstrap';

const Profile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /************ METHOD ******************/
    
    return (
        <Container>
            <p className="text-center mt-3 mb-4 fs-2"><u>Profile</u></p>

            <GetProfile />

            {/* <div className='text-center'>
                <Button variant="primary" className='shadow' onClick={handleShow}>
                    Update
                </Button>
            </div> */}

            {/* Profile Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                // backdrop="static"
                // keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" name="name" value="" placeholder='Name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="age">
                        <Form.Control type="number" name="age" value="" placeholder='Age' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gender">
                        <Form.Control type="text" name="gender" value="" placeholder='Gender' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="height">
                        <Form.Control type="number" name="height" value="" placeholder='Height (in cm)' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="weight">
                        <Form.Control type="number" name="weight" value="" placeholder='Weight (in kg)' />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="btn btn-sm" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Profile