import React from 'react'
import { Link } from 'react-router-dom'
import style from "./reg.module.css"
import 'boxicons/css/boxicons.min.css'
import logo from '../Images/logo.avif'
const EMSWelcomePage = () => {
  return (
    <section>
    <nav>
      <div id={style.logo}>
      <i class='bx bx-paragraph'></i>
        <h1>Employee Management System</h1>
      </div>
      <div id={style.navbar}>
        <Link to="/about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
    </section>
  )
}

export default EMSWelcomePage
