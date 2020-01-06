import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"


import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import PYW from "./components/PlanYourWeek"
import WAAG from "./components/WkAtAGlance"
import BrowseEx from "./components/BrowseEx"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/pyw" component={PYW} />
          <Route exact path="/waag" component={WAAG} />
          <Route exact path="/browse" component={BrowseEx} />
        </div>
      </div>
    </Router>
  );
}

export default App;
