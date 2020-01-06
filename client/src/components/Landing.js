import React, { Component } from "react"
import './styles/landing.css';



class Landing extends Component {
  render () {
    return ( 
      
      <div className="wrap-box">
        <div className="cta-box">
          <h1 className="brand-h1">OMEGA</h1>
          <span className="cta-span">Please Login or Register</span>
        </div>
      </div>
    )
  }
}

export default Landing