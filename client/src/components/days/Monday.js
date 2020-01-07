import React, { Component } from "react"
import API from "../../utils/API";

class Monday extends Component {

  state = {
    savedWorkouts: [],
	}

	componentDidMount() {
		API.getAllWorkouts()
      .then(savedWorkouts => this.setState({ savedWorkouts: savedWorkouts }))
      .catch(err => console.error(err));
  }
  
  render () {
    return ( 
      
      <div className="day-box">
        <h1 style={{ 
          color: "white",
          textAlign: "center",
          marginTop: "15px"
        }}>
        
        Monday
        
        </h1>

        <div className="day-plan-box">
          <div className="wu-day-plan">
            <h5 style={{
              color: "white",
              textAlign: "center",
              textDecoration: "underline"
            }}>
              
              Warm Up
              
            </h5>
            <div className="wu-contents">

            </div>
          </div>
          <div className="wo-day-plan">
            <h5 style={{
              color: "white",
              textAlign: "center",
              textDecoration: "underline"
            }}>
              
              Workouts
              
            </h5>
            <div className="wo-contents">
              {console.log(this.state.savedWorkouts)}

              {this.state.savedWorkouts.map(item =>
              <div>
                <h6>{item.workoutWO}</h6>
              </div>
              )}
    
            </div>
          </div>
          <div className="cd-day-plan">
            <h5 style={{
              color: "white",
              textAlign: "center",
              textDecoration: "underline"
            }}>
              
              Cool Down
              
            </h5>
            <div className="cd-contents">

            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default Monday