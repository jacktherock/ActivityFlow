import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import React, { useState } from 'react';
import { Container, Button, Form, Row, Col, Toast, Spinner } from 'react-bootstrap';
// import signupImg from '../../assets/imgs/signup.jpg'
import signupImg from '../../assets/imgs/signup-rb.png'

const Signup = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Signup
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPassword, setSignupPassword] = useState('')

    // Signup
    const signupSubmit = async (e) => {
        e.preventDefault()
        // console.log(signupEmail, signupPassword);
        try {
            setLoading(true);
            const result = await auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
            // alert(`Account created successfully! Please Login!`)
            navigate('/activity');
            setLoading(false);
        } catch (err) {
            // alert(err.message)
            setError(err.message);
            setLoading(false);
        }
    }


    return (
        <Container fluid>
            <div className='d-flex align-items-center justify-content-center'>
                <h1 className='text-center shadow px-4 mt-4 rounded-pill py-2'>Signup</h1>
            </div>
            <Row className="d-flex align-items-center justify-content-center ">
                <img src={signupImg} alt="" className='' style={{ width: "500px" }} />

                <Col className="py-5" style={{ width: "450px" }} md={8}>
                    <h3>Please Register Runner...</h3>
                    <Form onSubmit={(e) => signupSubmit(e)} className="my-4">
                        <Form.Group className="mb-3" controlId="signupEmail">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@gmail.com"
                                    onChange={(e) => setSignupEmail(e.target.value)}
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="signupPassword">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setSignupPassword(e.target.value)}
                                />
                                <label htmlFor="floatingInputCustom">Password</label>
                            </Form.Floating>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <p>Already have account? <Link to="/login" className='text-decoration-none'> Login </Link> now</p>
                    {error ? (
                        <div className="d-flex justify-content-center">
                            <Toast className="bg-danger">
                                <Toast.Body className='text-white'>Error: {error}</Toast.Body>
                            </Toast>
                        </div>
                    ) : loading ? (
                        <div className='my-5 d-flex align-items-center justify-content-center text-center'>
                            <Spinner className="my-5 d-flex text-center" animation="border" role="status" />
                        </div>
                    ) : null}
                </Col>
            </Row>
        </Container>
    )
}

export default Signup