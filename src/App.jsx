import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//PAGES
import HomePage from "./pages/Home"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  )
}

export default App
