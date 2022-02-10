import React from "react"
import logo from './logo.svg'
import './App.css'

function Main() {
    return (
        <div className="main"ndImag >
            <h1 className="main--h1">Fun facts about React</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
             <ul className="main--ul">
             <li> Was first released in 2013</li>
             <li> Was originally created by Jordan Walke</li>
             <li> Has well over 100K stars on GitHub</li>
             <li> Is maintained by Facebook</li>
             <li> Powers thousands of enterprise apps, including mobile apps</li>
             </ul>
        </div>
    )
}
export default Main