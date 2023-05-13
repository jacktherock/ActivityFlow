import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const ProfileModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "age") {
            setAge(value);
        }
        if (id === "height") {
            setHeight(value);
        }
        if (id === "weight") {
            setWeight(value);
        }
    }

    const handleSubmit = () => {
        // e.preventDefault()
        console.log(name, email, age, height, weight);
    }
    
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" name="name" value={name} onChange={(e) => handleInputChange(e)} placeholder='Name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" name="email" value={email} onChange={(e) => handleInputChange(e)} placeholder='Email address' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="age">
                    <Form.Control type="number" name="age" value={age} onChange={(e) => handleInputChange(e)} placeholder='Age' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="height">
                    <Form.Control type="number" name="height" value={height} onChange={(e) => handleInputChange(e)} placeholder='Height (in cm)' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="weight">
                    <Form.Control type="number" name="weight" value={weight} onChange={(e) => handleInputChange(e)} placeholder='Weight (in kg)' />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={() => handleSubmit()}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProfileModal