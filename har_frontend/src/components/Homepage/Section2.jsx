import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import exerciseCard from '../../assets/imgs/exercise_prev_ui.png'
import healthCard from '../../assets/imgs/health_prev_ui.png'
import growCard from '../../assets/imgs/grow_prev_ui.png'

const card = [
    {
        id: 1,
        title: "Fitness",
        img: exerciseCard,
    },
    {
        id: 2,
        title: "Health",
        img: healthCard,
    },
    {
        id: 3,
        title: "Grow",
        img: growCard,
    },
]

const Section2 = () => {
    return (
        <Row className='mt-5 mb-5 mx-2'>
            <p className="text-center fs-2 fw-semibold text-capitalize mt-5 mb-5 home_title">Experience Optimal Health and Wellness</p>
            {
                card.map((item) => {
                    return (
                        <Col xs={12} sm={4} md={4} key={item.id}>
                            <Card className="border-0 shadow rounded-5 mb-4">
                                <Card.Img src={item.img} className='border-0 rounded-5 img-fluid img-thumbnail' alt="Card image" />
                                <Card.ImgOverlay className="d-flex justify-content-center align-items-end">
                                    <Card.Title className="shadow card_title px-3 py-1 rounded-3">{item.title}</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    )
                })
            }
            <p className='my-5 fs-5 text-center fst-italic'>
                App utilizes advanced machine learning algorithms to accurately recognize and record various human activities
            </p>
        </Row>
    )
}

export default Section2