import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import React, { useState } from 'react';
import { Toast, Spinner, Container, Button, Form, Row, Col } from 'react-bootstrap';
// import loginImg from '../../assets/imgs/login.jpg'
import loginImg from '../../assets/imgs/login-rb.png';

const Login = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Login
    const [passwordShown, setPasswordShown] = useState(false);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    // Login
    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            // eslint-disable-next-line
            const result = await auth.signInWithEmailAndPassword(loginEmail, loginPassword)
                .then((user) => {
                    const token = auth.currentUser.getIdToken(true).then((idToken) => {
                        localStorage.setItem('idToken', idToken);
                    })
                    const uid = user.user.uid;
                    localStorage.setItem('uid', uid);
                    // console.log(uid)
                })
            // console.log(result);
            navigate('/activity');
            setLoading(false);
        } catch (err) {
            // alert(err.message)
            setError(err.message);
            setLoading(false);
        }
    };

    if (localStorage.getItem('uid')) {
        navigate('/activity');
    }

    return (
        <Container fluid>
            <div className='d-flex align-items-center justify-content-center'>
                <h1 className='text-center px-5 mt-4 py-1 home_title'>Login</h1>
            </div>
            <Row className="d-flex align-items-center justify-content-center mx-3">
                <Col className="py-5" style={{ width: "450px" }} md={8}>
                    <h3>Welcome Runner...</h3>
                    <Form onSubmit={(e) => loginSubmit(e)} className="my-4">
                        <Form.Group className="mb-3">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@gmail.com"
                                    className='rounded-3'
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Floating className=' d-flex align-items-center justify-content-center'>
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="Password"
                                    className='rounded-3'
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPasswordCustom">Password</label>
                                <Button className="bg-transparent text-dark border-0" onClick={togglePassword}>{passwordShown ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}</Button>
                            </Form.Floating>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='rounded-3'>
                            Login
                        </Button>
                    </Form>
                    <p>Don't have account? <Link to="/download" className='text-decoration-none'> Download App & Create account </Link></p>
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
                <img src={loginImg} alt="" style={{ width: "500px" }} />
            </Row>
        </Container>
    );
};

export default Login;
