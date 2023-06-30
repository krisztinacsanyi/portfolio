import React from "react"
import Header from "./Header"
import Objective from "./Objective"
import WebFont from "webfontloader"
import SmoothScroll from "smooth-scroll"
import "../assets/css/app.css"

function App() {
    new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    })
    WebFont.load({
        google: {
            families: ["Oswald", "Source Sans Pro"],
        },
    })
    return (
        <div className="app">
            <Header />
            <Objective />
        </div>
    )
}

export default App
