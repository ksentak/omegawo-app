import React, { Component } from "react"
import './styles/profile.css';
import jwt_decode from "jwt-decode"
import {Link, withRouter} from "react-router-dom"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      _id: ""
    }
  }

  componentDidMount () {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    this.setState({
      first_name: decoded.first_name,
      _id: decoded._id
    });
    
  }

  // {this.state.first_name}

  render() {
    return (
      <div className="box">
        <div className="greeting-box">
          <h1 className="wb">Welcome Back {this.state.first_name}!</h1>
          <span className="cta-span">What would you like to achieve today?</span>
        </div>
        <div className="options-box">
          <div className="first-row-box">
          <span className="op-box-item-row-1 op-box">
            <Link to="/pyw" style={{ textDecoration: 'none', color: "white" }}>Plan Your Week</Link>
          </span>
            <span className="op-box-item-row-1 op-box">
              <Link to="/waag" style={{ textDecoration: 'none', color: "white" }}>Week At A Glance</Link>
            </span>
          </div>
              <span className="op-box-item-row-2 op-box">
               <Link to="/browse" style={{ textDecoration: 'none', color: "white" }}>Exercise Basics</Link>
              </span>
        </div>
      </div>
    )
  }

}

export default withRouter(Profile)