import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import React, { useState, useEffect } from 'react';

const Header = ({ user, data }) => {

    const navigate = useNavigate()

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Navbar key="md" variant="dark" sticky="top" expand="md" className="py-3 shadow" style={{ backgroundColor: "#0C172B" }}>
                <Container fluid>

                    <img src={data.logo} alt="Logo" width="40" height="40" className="me-3" />
                    <Link to="/" className="">
                        <Button variant="dark" className='navhover rounded-pill fs-5' style={{ backgroundColor: "#172541" }}>
                            {data.title}
                        </Button>
                    </Link>

                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="start"
                        className="offcanvas-size"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                                <img src={data.logo} alt="Logo" width="40" height="40" className="me-3" />
                                {data.title}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {user ?
                                    <>
                                        <NavDropdown
                                            className="me-4"
                                            title="Dashboard"
                                            id="offcanvasNavbarDropdown-expand-md"
                                        >
                                            <NavDropdown.Item as={Link} to="/activity">
                                                <i className="bi bi-layers"></i> Activity
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/profile">
                                                <i className="bi bi-person"></i> Profile
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item to="/" className="text-danger fw-bold" onClick={() => {
                                                // localStorage.removeItem('uid')
                                                localStorage.clear()
                                                auth.signOut()
                                                navigate('/')
                                            }}>
                                                <i className="bi bi-box-arrow-left"></i> Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login" className="navhover nav-item mx-3 py-2">
                                            Login <i className="bi bi-box-arrow-in-right"></i>
                                        </Nav.Link>
                                    </>
                                }
                                <Nav.Link as={Link} to="/about" className="navhover nav-item mx-3 py-2">
                                    About
                                </Nav.Link>
                                <Nav.Link as={Link} to="/group" className="navhover nav-item mx-3 py-2">
                                    Group
                                </Nav.Link>
                                <Nav.Link as={Button} className="bg-transparent text-info nav-item border-0">
                                    {currentTime}
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;