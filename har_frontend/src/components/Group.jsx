import React from 'react'
import { Link } from 'react-router-dom'
import contact1 from "../assets/imgs/contact1.jpeg"
import contact2 from "../assets/imgs/contact2.jpeg"
import contact3 from "../assets/imgs/contact3.jpeg"
import contact4 from "../assets/imgs/contact4.png"
import { Card, Row, Col, Container } from 'react-bootstrap';

const contact = [
    {
        id: 1,
        name: "Abhijeet Sonawane",
        img: contact1,
        github: "https://github.com/jacktherock",
        linkedin: "https://www.linkedin.com/in/abhijeetsss/"
    },
    {
        id: 2,
        name: "Pratik Chopane",
        img: contact2,
        github: "https://github.com/prateiku",
        linkedin: "https://www.linkedin.com/in/pratikchopane/"
    },
    {
        id: 3,
        name: "Harshada Shelke",
        img: contact4,
        github: "",
        linkedin: "https://www.linkedin.com/in/harshada-s-401889179/"
    },
    {
        id: 4,
        name: "Nikhil Chinchore",
        img: contact3,
        github: "https://github.com/NI-TECH-hub",
        linkedin: "https://www.linkedin.com/in/nikhil-chinchore-098b49201/"
    },
]

const Group = () => {
    return (
        <Container className="mb-5">
            <p className="text-center mt-3 mb-4 fs-2 text-decoration-underline">Project mates</p>
            <Row className="d-flex justify-content-center">
                {
                    contact.map((item) => {
                        return (
                            <Col key={item.id} className="d-flex justify-content-center align-items-center" xs={8} sm={6} md={4} lg={3}>
                                <Card className="mt-4 border-0 w-100 mx-3">
                                    <Card.Img variant="top" className="shadow rounded-circle img-fluid" src={item.img} />
                                    <Card.Body className='text-center'>
                                        <Card.Title className="shadow p-2 rounded-4 mb-2">{item.name}</Card.Title>
                                        <div className='d-flex justify-content-evenly'>
                                            <Row>
                                                {
                                                    item.github ?
                                                        <Col className="mb-2">
                                                            <Card.Text className="shadow px-2 py-1 rounded-circle">
                                                                <Link to={item.github} className='text-decoration-none text-dark'>
                                                                    <i className='bi bi-github'></i>
                                                                </Link>
                                                            </Card.Text>
                                                        </Col>
                                                        :
                                                        ""
                                                }
                                                {
                                                    item.linkedin ?
                                                        <Col>
                                                            <Card.Text className='shadow px-2 py-1 rounded-circle'>
                                                                <Link to={item.linkedin}>
                                                                    <i className='bi bi-linkedin'></i>
                                                                </Link>
                                                            </Card.Text>
                                                        </Col> :
                                                        ""
                                                }
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Group