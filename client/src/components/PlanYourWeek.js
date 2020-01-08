import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import Workout from "./Workout";

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
            <button id="wu-link" className="pyw-button"></button>
            <button className="pyw-button"><Link to="/workout" style={{ textDecoration: "none", color: "white" }}>Workout</Link></button>
            <button id="cd-link" className="pyw-button"></button>
          </div>

          <div className="wo-box">
            <Route path="/warmup" component={Workout} />
            <Route path="/workout" component={Workout} />
            <Route path="/cooldown" component={Workout} />
          </div>

        </div>
      </Router>
    );
  };
};

export default withRouter(PlanYourWeek);
