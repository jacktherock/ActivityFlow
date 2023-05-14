import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const blog = [
    {
        id: 1,
        title: "Fitness",
        desc: "Fitness is crucial to a healthy and fulfilling life. It requires regular exercise and a balanced diet to enhance both physical and mental health. By mitigating the risk of chronic diseases, enhancing cardiovascular health, increasing muscle strength and endurance, boosting energy levels, and improving mood and mental health."
    },
    {
        id: 2,
        title: "Nutrition",
        desc: "Good health means taking care of your body, mind, and social wellbeing. It involves regular exercise, balanced nutrition, rest, stress management, and avoiding harmful substances. By prioritizing good health, you can enjoy a happier, more productive life while reducing the risk of chronic diseases and other health conditions."
    }
]

const Section3 = () => {
    return (
        <Row className='mt-5 mb-5 mx-2 d-flex justify-content-center align-items-center'>
            <p className="text-center fs-2 fw-semibold text-capitalize mt-5 mb-5 home_title">Revitalize Mind, Body, and Soul for a Better You</p>
            {
                blog.map((item) => {
                    return (
                        <Col sm={12} md={6} lg={6} key={item.id}>
                            <Card className="p-4 text-center border-0 shadow rounded-5 mb-4">
                                <Card.Title className='pb-2 fw-bold fs-4 pt-2 text-decoration-underline text-warning'>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.desc}
                                </Card.Text>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default Section3