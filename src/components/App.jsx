import React from "react"
import Header from "./Header"
import Objective from "./Objective"
import WebFont from "webfontloader"
import "../assets/js/app"
import "../assets/css/app.css"

function App() {
  WebFont.load({
    google: {
      families: ["Oswald", "Source Sans Pro", "Raleway"],
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
