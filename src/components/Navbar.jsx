import React from 'react'
import Logo from "../images/reactjs-icon.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={Logo} alt="" />
            <h1>ReactFacts</h1>
        </div>
        <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar