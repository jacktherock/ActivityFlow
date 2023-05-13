import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const blog = [
    {
        id: 1,
        desc: "Fitness is the state of being physically and mentally healthy and active. It involves engaging in regular exercise and maintaining a balanced and nutritious diet to improve one's overall health and wellbeing. Engaging in fitness activities can help reduce the risk of chronic diseases, improve cardiovascular health, increase muscle strength and endurance, boost energy levels, and improve mood and mental health."
    },
    {
        id: 2,
        desc: "Health refers to the overall state of physical, mental, and social wellbeing. It involves maintaining a healthy lifestyle by engaging in regular exercise, eating a balanced and nutritious diet, getting enough sleep, managing stress, and avoiding harmful substances. Good health is essential for living a happy and productive life, and it can also reduce the risk of developing chronic diseases and other health conditions."
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