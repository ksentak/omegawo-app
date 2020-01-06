import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link, withRouter} from "react-router-dom"
import Warmup from "./Warmup"
import Workout from "./Workout"
import CoolDown from "./CoolDown"

class PlanYourWeek extends Component {
  render() {
    return (
    <Router> 

      <div className="pyw-box">
        <h1 style={{
          color: "white",
          textAlign: "center",
          marginTop: "15px"
        }}>
          Plan Your Week
        </h1>

        <div className="button-box">
          <button className="pyw-button"><Link to="/warmup" style={{ textDecoration: "none", color: "white"}}>Warmup</Link></button>
          <button className="pyw-button"><Link to="/workout" style={{ textDecoration: "none", color: "white"}}>Workout</Link></button>
          <button className="pyw-button"><Link to="/cooldown" style={{ textDecoration: "none", color: "white"}}>Cool Down</Link></button>
        </div>

        <div className="wo-box">
          <Route path="/warmup" component={Warmup} />
          <Route path="/workout" component={Workout} />
          <Route path="/cooldown" component={CoolDown} />
        </div>

      </div>
      </Router> 
    )
  }
}

export default withRouter(PlanYourWeek)