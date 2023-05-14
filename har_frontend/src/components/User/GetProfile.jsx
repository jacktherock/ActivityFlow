import { Container, Card, Row, Col, Placeholder } from "react-bootstrap";
import { db, auth } from "../../firebase"
import React, { useEffect, useState } from 'react'

const GetProfile = () => {
    const [data, setData] = useState({})
    const [eml, setEml] = useState('')
    const uid = auth.currentUser?.uid;
    const docRef = db.collection("userBioData").doc(uid);

    const user = auth.currentUser;

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setEml(user.email);
            }
        });
    }, [user])

    useEffect(() => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setData(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        // eslint-disable-next-line
    }, [uid])

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
                                data.userHeight || data.userHeight == null?
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
                                data.weight|| data.weight == null ?
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