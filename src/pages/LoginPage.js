import React from 'react'

import Header from "../components/Header";
import LoginForm from "../components/LoginForm"
import Footer from "../components/Footer"

const LoginPage = () => {
  return (
    <div className="container">
        <Header/>
        <LoginForm/>
        <Footer/>
    </div>
  )
}

export default LoginPage
