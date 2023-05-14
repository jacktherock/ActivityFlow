import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import bgActivity from '../assets/imgs/activity.png'

const About = ({ data }) => {
    return (
        <div className='d-flex justify-content-center'>
            <Card className="m-4 p-4 rounded-5 shadow border-0" style={{ width: "1000px" }}>
                <Row>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title className="text-center text-decoration-underline">
                                <img src={data.logo} alt="" width="50" />
                                <span className='p-2'>
                                    {data.title}
                                </span>
                            </Card.Title>
                            <div style={{ textAlign: "justify" }}>
                                <Card.Text className="mt-4">
                                    A human activity recognition app is a software tool that uses sensors such as accelerometers, gyroscopes, and magnetometers to monitor and track the activities of the user. The app provides precise information about the activity performed by the user throughout the day with 90% accuracy. The app can recognize a wide range of activities such as walking, running, cycling, sitting, standing, and even sleeping.
                                </Card.Text>
                                <Card.Text>
                                    The app works by collecting data from the sensors and using machine learning algorithms to analyze and classify the activity being performed. The algorithms are trained on a large dataset of labeled activity data, which allows the app to accurately recognize and classify activities with high accuracy.
                                </Card.Text>
                                <Card.Text>
                                    The app provides real-time feedback to the user about their activity level and can also provide alerts and reminders to encourage them to stay active throughout the day. The app can also track the user's progress over time, allowing them to set goals and monitor their progress towards achieving them.
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center align-items-center">
                        <img src={bgActivity} alt="" className='img-fluid' />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default About