import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from "react-bootstrap"
import Piechart from './Piechart'
import Tracks from './Tracks'
import { useNavigate } from 'react-router-dom'
import { db, auth } from "../../firebase"
import axios from 'axios'


const Activity = ({ localhost, user }) => {

  const date_url = `${localhost}/activity?date=`

  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();
  const [tracks, setTracks] = useState(currentDate);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const uid = auth.currentUser?.uid;
  const docRef = db.collection("userActivityData").doc(uid)

  const handleDateChange = (event) => {
    setSelectedDate(event.nativeEvent.srcElement.valueAsDate);
  };


  useEffect(() => {
    docRef.get().then((doc) => {
      if (doc.exists) {
        setTracks(doc.data());
        // console.log(doc.data());
        setLoading(false);
      } else {
        // doc.data()// will be undefined in this case
        // console.log("No such document!");
        setLoading(false);
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
      // setError(error)
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [uid])

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    const idToken = localStorage.getItem("idToken");

    if (idToken && selectedDate) {
      const date = selectedDate.toISOString().slice(0, 10)

      axios.get(date_url + date, {
        headers: { token: `${idToken}` }
      })
        .then((response) => {
          // console.log(response.data);
          setTracks(response.data.overall_stats);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedDate, date_url])


  return (
    <Container className="mb-5">
      <p className="text-center mt-3 mb-4 fs-2 text-decoration-underline">Activity</p>
      <div className='d-flex justify-content-center'>
        <Form.Control className="mb-5 date-trigger border-0 text-center shadow rounded-pill" style={{ width: "220px" }} type="date" id="date" onChange={handleDateChange} placeholder='Get Tracks' />
      </div>
      <Row className=''>
        <Col md={6} lg={6}>
          <Tracks tracks={tracks} loading={loading} />
        </Col>
        <Col md={6} lg={6}>
          <Piechart tracks={tracks} loading={loading} />
        </Col>
      </Row>
    </Container>
  )
}

export default Activity