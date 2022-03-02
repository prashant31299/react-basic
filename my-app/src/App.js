import React from "react"
import Main from "./component/Main"
import Navbar from "./component/navbar"
import './component/App.css'
export default function App() {

    const [darkmode, setDarkmode] = React.useState(true)

        function toggleDarkMode(){
            setDarkmode(prevMode=>!prevMode)
        }
    return (
        <div className="container">
            <Navbar  darkmode={true}
               toggleDarkMode={toggleDarkMode} />

            <Main darkmode={darkmode}/>
      
        </div>
    )
}