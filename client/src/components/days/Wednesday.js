import React, { Component } from "react"
import API from "../../utils/API";
import jwt_decode from "jwt-decode"

class Wednesday extends Component {

  state = {
    savedWorkouts: [],
	}

	componentDidMount() {

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    this.setState({
      userId: decoded._id
    });

		API.getAllWorkouts()
      .then(res => {
        console.log(res)
        var wednesday = []
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].daySelect);
          if (res[i].daySelect === "Wednesday" && res[i].userId === this.state.userId){
            wednesday.push(res[i].workoutWO)
            wednesday.push(res[i].workoutSets)
            wednesday.push(res[i].workoutReps)
          }

        }
        console.log("Wednesday: " + wednesday)
        this.setState({ savedWorkouts: wednesday})
       
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
        
        Wednesday
        
        </h1>

        <div className="day-plan-box">
          {/* <div className="wu-day-plan">
            <h5 style={{
              color: "white",
              textAlign: "center",
              textDecoration: "underline"
            }}>
              
              Warm Up
              
            </h5>
            <div className="wu-contents">

            </div>
          </div> */}
          <div className="wo-day-plan">
            <h5 style={{
              color: "white",
              textAlign: "center",
              textDecoration: "underline"
            }}>
              
              Workouts
              
            </h5>

            <div className="wo-header">
              <span className="wo-header-span">Type</span>
              <span className="wo-header-span">Reps</span>
              <span className="wo-header-span">Sets</span>
            </div>


            <div className="wo-contents">
              {console.log(this.state.savedWorkouts)}

              {this.state.savedWorkouts.map(item =>
              <div className="waag-wo-box">
                <span className="waag-wo">{item}</span>
              </div>
              )}
    
            </div>
          </div>
          {/* <div className="cd-day-plan">
            <h5 style={{
              color: "white",
              textAlign: "center",
              textDecoration: "underline"
            }}>
              
              Cool Down
              
            </h5>
            <div className="cd-contents">

            </div>
          </div> */}


        </div>
      </div>
    )
  }
}

export default Wednesday;
