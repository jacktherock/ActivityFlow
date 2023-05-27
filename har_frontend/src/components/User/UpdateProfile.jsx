import React from 'react'
import { useState } from 'react'
import { updateProfile } from '../../network/agent.js'
// import { Link } from 'react-router-dom'

const UpdateProfile = () => {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        age: "",
        height: "",
        weight: "",
    })

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setProfile({ ...profile, [name]: value })

    }

    return (
        <div className='container'>
            <h1 className='text-center pt-3'>Update Profile</h1>
            <div className='py-3'>
                <div className="card shadow ">
                    <div className="card-header text-center">
                        username
                    </div>
                    <div className="card-body ">
                        <form>
                            <div className="mb-3">
                                <input type="text" name="name" value={profile.name} onChange={getUserData} placeholder='Name' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="email" value={profile.email} onChange={getUserData} placeholder='Email address' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="number" name="age" value={profile.age} onChange={getUserData} placeholder='Age' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="number" name="height" value={profile.height} onChange={getUserData} placeholder='Height (in cm)' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="number" name="weight" value={profile.weight} onChange={getUserData} placeholder='Weight (in kg)' className="form-control" />
                            </div>
                            <div className="text-center my-3">
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateProfile