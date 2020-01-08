import React, { Component } from "react"
import {newWorkouts} from "./WorkoutFunctions"
import searchResults from "./workouts.json"
import jwt_decode from "jwt-decode"


class Workout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults,
      daySelect: "Monday",
      workoutWO: "",
      workoutReps: "",
      workoutSets: "",
      browseExercises: "Chest",
      // userId: ""
    }
  }

  componentDidMount () {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    this.setState({
      userId: decoded._id
    });

  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = this.state
    console.log(data)

    const WO = {
      daySelect: this.state.daySelect,
      workoutWO: this.state.workoutWO,
      workoutReps: this.state.workoutReps,
      workoutSets: this.state.workoutSets,
      userId: this.state.userId
    }

    newWorkouts(WO).then(res => {
      this.props.history.push("/workout")
    })

  }

  handleBrowseSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.browseExercises)
  }

  handleDSChange = (e) => {
    this.setState({
      daySelect: e.target.value
    })
  }

  handleBEChange = (e) => {
    this.setState({
      browseExercises: e.target.value
    })    
  }

  handleWOChange = (e) => {
    this.setState({
      workoutWO: e.target.value,
    })
  }

  handleRepChange = (e) => {
    this.setState({
      workoutReps: e.target.value,
    })
  }

  handleSetsChange = (e) => {
    this.setState({
      workoutSets: e.target.value,
    })
  }

  showDivs = () => {
    document.getElementById("sr").style.display = "block";
    document.getElementById("sb").style.display = "block";
    document.getElementById("collapse").style.display = "inline";
  }

  hideDivs = () => {
    document.getElementById("sr").style.display = "none";
    document.getElementById("sb").style.display = "none";
    document.getElementById("collapse").style.display = "none";
  }

  passTheWO = (i) => {
    console.log(searchResults[i].name)
    this.setState({
      workoutWO: searchResults[i].name
    })
  }

  render() {
    return (

      <div>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <div className="inputs1">
            <span className="label">Choose A Day: </span>
            <select className="day-selector" onChange={this.handleDSChange}>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="inputs2">
            <label>
              Workout:
          <input type="text" id="WO" value={this.state.workoutWO} name="warmupWO" className="wu-input" onChange={this.handleWOChange} />
            </label>
            <label>
              Reps:
          <input type="text" name="warmupReps" className="wu-num" onChange={this.handleRepChange} />
            </label>
            <label>
              Sets:
          <input type="text" name="warmupSets" className="wu-num" onChange={this.handleSetsChange} />
            </label>
            <button className="add-wo-btn" type="submit">Add Workout</button> 
            
          </div>
        </form>
              <button className="browse-toggle" onClick={this.showDivs}>Browse Exercises</button>
              <button id="collapse" onClick={this.hideDivs}>Collapse Exercises</button>
              <form className="search-box" id="sb" onSubmit={this.handleBrowseSubmit}>
        <label>
          Browse Exercises:
            <select className="wo-browser" onChange={this.handleBEChange}>
            <option value="Chest">Chest</option>
            <option value="Legs">Legs</option>
            <option value="Full-body">Full-Body</option>
            <option value="Back">Back</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Core">Core</option>
            <option value="Biceps">Biceps</option>
            <option value="Triceps">Triceps</option>
          </select>
        </label>

        <button className="browse-btn" id="fw">Filter Workouts</button>
        <button className="browse-btn" id="saw">All Workouts</button>

        <div className="search-results" id="sr">
          {this.state.searchResults.map((item, i) => (
            <div>
              <div className="bold_name">{item.name}</div>
              <span className="category">Category: {item.category}</span>
              <span className="link"><a href={item.link} target="_blank">Youtube Example</a></span>
              <button className="addtoplan"  onClick={() => this.passTheWO(i)}>Add To Plan</button>
              <hr />
            </div>

          ))}
        </div>

      </form>
      </div>
    )
  }
}

export default Workout