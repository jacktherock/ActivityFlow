import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import Home from './components/Homepage/Home';
import Header from './components/Header';
import About from './components/About';
import Group from './components/Group';
import Footer from './components/Footer';
import Profile from './components/User/Profile';
import UpdateProfile from './components/User/UpdateProfile';
import Login from './components/Form/Login'
// import Signup from './components/Form/Signup'
import Activity from './components/Activity/Activity';
import logoImg from "./assets/imgs/logo.png"
import Download from './components/Form/Download';
// import logoImg from "./assets/imgs/run_logo.png"


const data = {
  logo: logoImg,
  title: "ActivityFlow"
}

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        // console.log(user.multiFactor.user.uid)
      } else { setUser(null) }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      <Header user={user} data={data} />
      <Routes>
        <Route path="/" element={<Home data={data} user={user} />} />
        <Route path="/activity" element={<Activity user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/download" element={<Download />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/group" element={<Group />} />
        <Route path="/about" element={<About data={data} />} />
      </Routes>
      <Footer data={data} />
    </>
  );
}

export default App;
