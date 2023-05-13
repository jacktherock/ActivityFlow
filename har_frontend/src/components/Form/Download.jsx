import React from 'react'
import { Container, Card } from "react-bootstrap"

const makeCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "75vh",
}

const Download = () => {
  return (
    <Container style={makeCenter}>
      <Card className="p-5 m-5 border-0 shadow rounded-5 text-center bg-download">
        <Card.Title className="fs-3">Download App</Card.Title>
        <Card.Text>& Create New Account</Card.Text>
        <Card.Text>
          Go to GitHub & download the app now .
        </Card.Text>
        <Card.Text className="text-center">
          <a href="https://github.com/prateiku/AndroidActivityTracker"><i className="bi bi-download fs-3 text-success"></i></a>
        </Card.Text>
      </Card>
    </Container>
  )
}

export default Download