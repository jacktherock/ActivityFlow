import React from 'react'
import GetProfile from './GetProfile';
import { Container } from 'react-bootstrap';
import ProfileModal from './ProfileModal';

const Profile = ({ localhost }) => {
    return (
        <Container>
            <p className="text-center mt-3 mb-4 fs-2 text-decoration-underline">Profile</p>
            <GetProfile localhost={localhost} />
            <ProfileModal localhost={localhost} />
        </Container>
    )
}

export default Profile