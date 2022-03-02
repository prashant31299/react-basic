import React from "react"
import './App.css'

function Main(props) {
    return (
        <div             
        className={props.darkMode ? "dark": ""}
        >
            <h1 className="main--h1">Fun facts about React</h1>
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