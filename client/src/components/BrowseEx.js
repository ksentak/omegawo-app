import React, { Component } from "react"
import ExerciseFAQs from "./ExerciseFAQs.json"

class BrowseEx extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      ExerciseFAQs:ExerciseFAQs
    }
  }

  render () {
    return ( 
      
      <div className="br-ex-box">
        <h1 style={{ 
          color: "white",
          textAlign: "center",
          marginTop: "15px"
        }}>
        Exercise Basics: What You Need To Know
        </h1>
        {this.state.ExerciseFAQs.map((item) => (
            <div>
              <h4 style={{ 
          color: "white",
          textAlign: "center",
          marginTop: "5px"
        }}>{item.name}</h4>
              <p style={{ 
          color: "white",
          textAlign: "center",
          marginTop: "5px"
        }}>{item.discussion}</p>
              <hr/>
            </div>
          ))}
      </div>
    )
  }
}

export default BrowseEx