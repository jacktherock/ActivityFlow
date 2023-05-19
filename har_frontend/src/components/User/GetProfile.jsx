import { Container, Card, Row, Col, Placeholder } from "react-bootstrap";
import { auth } from "../../firebase"
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const GetProfile = ({ localhost }) => {
    const self_url = `${localhost}/self`

    const [data, setData] = useState({})
    const [eml, setEml] = useState('')
    const user = auth.currentUser;

    useEffect(() => {
        const idToken = localStorage.getItem("idToken");

        if (idToken) {
            axios.get(self_url, {
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
    }, [self_url])

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setEml(user.email);
            }
        });
    }, [user])

    return (
        <Container className='my-5'>
            <Card className="border-0">
                <Card.Body>
                    <Row>
                        <Col className="text-center mb-3" md={6} lg={6}>
                            {
                                data.username || data.username == null ?
                                    <Card.Text className="shadow p-2 rounded-4">
                                        <label htmlFor="" className="text-muted">Username : </label> <span className="text-warning fw-bold">
                                            {data.username ? data.username : "NA"}
                                        </span>
                                    </Card.Text> :
                                    <Placeholder as="p" animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                            }
                        </Col>
                        <Col className="text-center mb-3" md={6} lg={6}>
                            {
                                eml ?
                                    <Card.Text className="shadow p-2 rounded-4">
                                        <label htmlFor="" className="text-muted">Email address : </label> <span className="text-warning fw-bold">
                                            {eml}
                                        </span>
                                    </Card.Text> :
                                    <Placeholder as="p" animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                            }
                        </Col>
                        <Col className="text-center mb-3" xs={6} sm={6} md={4} lg={4}>
                            {
                                data.age || data.age == null ?
                                    <Card.Text className="shadow p-2 rounded-4">
                                        <label htmlFor="" className="text-muted">Age : </label> <span className="text-warning fw-bold">
                                            {data.age ? data.age : "Not Available"}
                                        </span>
                                    </Card.Text> :
                                    <Placeholder as="p" animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                            }
                        </Col>
                        <Col className="text-center mb-3" xs={6} sm={6} md={8} lg={4}>
                            {
                                data.gender || data.gender == null ?
                                    <Card.Text className="shadow p-2 rounded-4">
                                        <label htmlFor="" className="text-muted">Gender : </label> <span className="text-warning fw-bold">
                                            {data.gender ? data.gender : "Not Available"}
                                        </span>
                                    </Card.Text> :
                                    <Placeholder as="p" animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                            }
                        </Col>
                        <Col className="text-center mb-3" xs={6} sm={6} md={6} lg={6}>
                            {
                                data.userHeight || data.userHeight == null ?
                                    <Card.Text className="shadow p-2 rounded-4">
                                        <label htmlFor="" className="text-muted">Height (in cm) : </label> <span className="text-warning fw-bold">
                                            {data.userHeight ? data.userHeight : "Not Available"}
                                        </span>
                                    </Card.Text> :
                                    <Placeholder as="p" animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                            }
                        </Col>
                        <Col className="text-center mb-3" xs={6} sm={6} md={6} lg={6}>
                            {
                                data.weight || data.weight == null ?
                                    <Card.Text className="shadow p-2 rounded-4">
                                        <label htmlFor="" className="text-muted">Weight (in kg) : </label> <span className="text-warning fw-bold">
                                            {data.weight ? data.weight : "Not Available"}
                                        </span>
                                    </Card.Text> :
                                    <Placeholder as="p" animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                            }
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default GetProfile