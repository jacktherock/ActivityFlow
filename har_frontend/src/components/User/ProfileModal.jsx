import React, { useEffect, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const initialValues = {
    age: "",
    userHeight: "",
    username: "",
    weight: ""
};

const ProfileModal = ({ localhost }) => {

    const update_url = `${localhost}/self`

    const [data, setData] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    useEffect(() => {
        const idToken = localStorage.getItem("idToken");
        if (idToken) {
            axios.get(update_url, {
                headers: { token: `${idToken}` }
            })
                .then((response) => {
                    //   console.log(response.data);
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [update_url])

    return (
        <>
            <div className='text-center'>
                <Button variant="primary" className='shadow mb-5' onClick={handleShow}>
                    Update
                </Button>
            </div>
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
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Control type="text" name="username" value={values.username} onChange={handleInputChange} placeholder={data.username ? data.username : "NA"} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="age">
                        <Form.Control type="number" name="age" value={values.age} onChange={handleInputChange} placeholder={data.age ? data.age : "Not Available"} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gender">
                        <Form.Select aria-label="Select Gender" onChange={handleInputChange}>
                            <option value="">Select Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                            <option value="A">Attack Helicopter</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="userHeight">
                        <Form.Control type="number" name="userHeight" value={values.userHeight} onChange={handleInputChange} placeholder={data.userHeight ? data.userHeight : "Not Available"} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="weight">
                        <Form.Control type="number" name="weight" value={values.weight} onChange={handleInputChange} placeholder={data.weight ? data.weight : "Not Available"} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProfileModal