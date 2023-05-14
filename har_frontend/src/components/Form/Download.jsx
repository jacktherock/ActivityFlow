import React from 'react'
import { Container, Card, Button, Row, Col } from "react-bootstrap"
import downloadLogo from '../../assets/imgs/download.jpg'

const makeCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "75vh",
}

const Download = () => {
  return (
    <Container style={makeCenter} className='bg-download my-5 ' fluid>
      <Card className="p-5 border-0 rounded-4 text-center">
        <div className="mb-4">
          <Card.Text className="fw-semibold fs-3">Get started with our app</Card.Text>
          <Card.Text>Stay connected with our community</Card.Text>
        </div>

        <div className="d-flex justify-content-center">
          <a href="https://github.com/prateiku/AndroidActivityTracker" rel="noreferrer" target="_blank" className='text-decoration-none'>
            <Button className="download d-flex justify-content-center align-items-center rounded-3">
              <img src={downloadLogo} alt="" width="30" />
              <p className='ms-2 my-auto'>Download App</p>
            </Button>
          </a>
        </div>

      </Card>
    </Container>
  )
}

export default Download