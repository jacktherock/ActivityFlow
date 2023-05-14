import React from 'react'
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"

const Tracks = ({ tracks, loading }) => {

  // if(error){
  //   return (
  //     <div className="d-flex justify-content-center" >
  //       <p className="shadow px-5 py-3 rounded-4 bg-danger text-white">{error}</p>
  //     </div>
  //   )
  // }

  return (
    <Container>

      {loading ? (
        <div className="d-flex justify-content-center" >
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <>
          {(Object.keys(tracks).length === 0) ? (
            <div className="d-flex justify-content-center" >
              <p className="shadow px-5 py-3 rounded-4 bg-danger text-white">No Data Available!</p>
            </div>
          ) : (
            <Row>
              <Col>
                <Card className="border-0 mb-3 shadow rounded-5 activity_body">
                  {/* <Card.Img variant="top" src="img" /> */}
                  <Card.Body className='text-center'>
                    <Card.Title className="pb-2">{tracks.Downstrairs} <span className="fw-light fs-6">seconds</span></Card.Title>
                    <Card.Text>
                      <span className='text-wrap shadow rounded-4 px-3 py-2 activity_name'>
                        Downstairs
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0 mb-3 shadow rounded-5 activity_body">
                  {/* <Card.Img variant="top" src="img" /> */}
                  <Card.Body className='text-center'>
                    <Card.Title className="pb-2">{tracks.Upstairs} <span className="fw-light fs-6">seconds</span></Card.Title>
                    <Card.Text>
                      <span className='text-wrap shadow rounded-4 px-3 py-2 activity_name'>
                        Upstairs
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0 mb-3 shadow rounded-5 activity_body">
                  {/* <Card.Img variant="top" src="img" /> */}
                  <Card.Body className='text-center'>
                    <Card.Title className="pb-2">{tracks.Running} <span className="fw-light fs-6">seconds</span></Card.Title>
                    <Card.Text>
                      <span className='text-wrap shadow rounded-4 px-3 py-2 activity_name'>
                        Running
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0 mb-3 shadow rounded-5 activity_body">
                  {/* <Card.Img variant="top" src="img" /> */}
                  <Card.Body className='text-center'>
                    <Card.Title className="pb-2">{tracks.Jogging} <span className="fw-light fs-6">seconds</span></Card.Title>
                    <Card.Text>
                      <span className='text-wrap shadow rounded-4 px-3 py-2 activity_name'>
                        Jogging
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0 mb-3 shadow rounded-5 activity_body">
                  {/* <Card.Img variant="top" src="img" /> */}
                  <Card.Body className='text-center'>
                    <Card.Title className="pb-2">{tracks.Sitting} <span className="fw-light fs-6">seconds</span></Card.Title>
                    <Card.Text>
                      <span className='text-wrap shadow rounded-4 px-3 py-2 activity_name'>
                        Sitting
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0 mb-3 shadow rounded-5 activity_body">
                  {/* <Card.Img variant="top" src="img" /> */}
                  <Card.Body className='text-center'>
                    <Card.Title className="pb-2">{tracks.Standing} <span className="fw-light fs-6">seconds</span></Card.Title>
                    <Card.Text>
                      <span className='text-wrap shadow rounded-4 px-3 py-2 activity_name'>
                        Standing
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0 mb-3 shadow rounded-5 activity_body">
                  {/* <Card.Img variant="top" src="img" /> */}
                  <Card.Body className='text-center'>
                    <Card.Title className="pb-2">{tracks.Walking} <span className="fw-light fs-6">seconds</span></Card.Title>
                    <Card.Text>
                      <span className='text-wrap shadow rounded-4 px-3 py-2 activity_name'>
                        Walking
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </>
      )
      }
    </Container>
  )
}

export default Tracks
