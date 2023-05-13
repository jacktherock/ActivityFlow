import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import homeImg from '../../assets/imgs/home.png'

const Section1 = ({ data, user }) => {
    return (
        <Row className='d-flex align-items-center justify-content-center mt-5 mb-5 mx-2'>
            <Col md={6}>
                <img src={homeImg} className='img-fluid' alt="" />
            </Col>
            <Col md={6}>
                <section>
                    <p> <span className='h1 fw-semibold home_title'>{data.title}</span> ~ <span className='fst-italic'>
                        Human Acitivity Recognition
                    </span> </p>
                    <p className='mt-3 mb-4 shadow p-3 rounded-4 home_info' style={{ textAlign: "justify" }}>
                        Our human activity recognition app tracks and analyzes your daily activities with 90% accuracy. Using machine learning algorithms, the app recognizes a range of activities such as walking, running, and sleeping. It provides real-time feedback and alerts to help you stay active and achieve your fitness goals.
                    </p>
                    <Link to={user ? "/activity" : "/login"}  >
                        <Button className='shadow get_started_btn'>
                            Get Started
                        </Button>
                    </Link>
                </section>
            </Col>
        </Row>
    )
}

export default Section1