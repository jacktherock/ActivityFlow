import React from 'react'
import { Row, Accordion } from 'react-bootstrap'

const accordion = [
    {
        id: 1,
        eventKey: "0",
        title: "Accurate tracking",
        body: "Our human activity recognition app utilizes advanced machine learning algorithms to accurately recognize and record various human activities, providing real-time data tracking and detailed analysis.",
    },
    {
        id: 2,
        eventKey: "1",
        title: "Comprehensive activity monitoring",
        body: "Our app can track a wide range of activities, including walking, running, cycling, and more. It also provides real-time feedback and alerts to help you stay active and achieve your fitness goals.",
    },
    {
        id: 3,
        eventKey: "2",
        title: "Personalized insights",
        body: "With detailed analysis and data tracking, our app provides personalized insights into your physical activity levels, allowing you to set and achieve your fitness goals like never before.",
    },
    {
        id: 4,
        eventKey: "3",
        title: "User-friendly interface",
        body: "Our app is designed to provide a seamless and intuitive user experience, making it easy for you to track your physical activity levels and monitor your progress.",
    },
    {
        id: 5,
        eventKey: "4",
        title: "Improved fitness performance",
        body: "Whether you're an athlete looking to improve your training regimen or simply interested in monitoring your daily physical activity levels, our app can help you take the first step towards a healthier, more active lifestyle.",
    },
]

const Section4 = () => {
    return (
        <Row className='mt-5 mb-5 mx-2'>
            <p className="text-center fs-2 fw-semibold text-capitalize mt-5 mb-5 home_title">Unlock Your Full Potential with ActivityFlow</p>
            <Accordion flush>
                {
                    accordion.map((item) => {
                        return (
                            <Accordion.Item eventKey={item.eventKey} className="text-center" key={item.id}>
                                <Accordion.Header className="text-decoration-none">{item.title}</Accordion.Header>
                                <Accordion.Body className="bg-accordian">
                                    {item.body}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </Row>
    )
}

export default Section4