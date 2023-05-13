import React from 'react'
import ContactForm from './ContactForm'
import { Col, Row, Card, Ratio } from 'react-bootstrap'

const Section5 = () => {
    return (
        <Row className='mt-5 mb-5 mx-2'>
            <p className="text-center fs-2 fw-semibold text-capitalize mt-5 mb-5 home_title">Join a Community of Health and Fitness Enthusiasts</p>
            <Card className="rounded-5 border-0 shadow pb-5">
                <Card.Body>
                    <Card.Title className="text-center fs-3 mb-3">Join Us</Card.Title>
                    <Row>
                        <Col lg={6} className="embed-responsive embed-responsive-16by9">
                            <Ratio aspectRatio="16x9">
                                <iframe title="map" className="rounded-3 shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121036.79080329303!2d73.82966142315429!3d18.55600977889419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683999079404!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Ratio>
                        </Col>
                        <Col lg={6}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Section5