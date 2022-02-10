import React from "react";
// import logo from './newlog.svg  '
import newlogo from './newlogo.svg'

import './App.css';


export default function Navbar() {
    return (
        <nav>
        {/* <img className="App-÷logo" alt="logo" /> */}

            <img src={newlogo}  className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}