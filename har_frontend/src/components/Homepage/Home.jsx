import React from 'react'
import { Container } from "react-bootstrap"

import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

const Home = ({ data, user }) => {

    return (
        <Container>
            <Section1 data={data} user={user} />

            <Section2 />

            <Section3 />

            <Section4 />

            <Section5 />
        </Container>
    )
}

export default Home