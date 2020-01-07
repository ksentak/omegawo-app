import React, { Component } from "react"
import API from "../../utils/API";

class Friday extends Component {

  state = {
    savedWorkouts: [],
	}

	componentDidMount() {
		API.getAllWorkouts()
      .then(res => {
        console.log(res)
        var friday = []
        for (var i = 0; i<res.length; i++) {
          console.log(res[i].daySelect);
          if (res[i].daySelect === "Friday"){
            friday.push(res[i].workoutWO)
            friday.push(res[i].workoutSets)
            friday.push(res[i].workoutReps)
          }

        }
        console.log("Friday: " + friday)
        this.setState({ savedWorkouts: friday})
      })
  }
  
  render () {
    return ( 
      
      <div className="day-box">
        <h1 style={{ 
          color: "white",
          textAlign: "center",
          marginTop: "15px"
        }}>
        
        Friday
        
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
                <h6>{item}</h6>
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

export default Friday;
