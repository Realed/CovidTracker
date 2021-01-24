import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//PAGES
import HomePage from "./pages/Home"
import CountriesPage from "./pages/Countries"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/countries" component={CountriesPage} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  )
}

export default App
