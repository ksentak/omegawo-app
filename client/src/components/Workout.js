import React, { Component } from "react"
import {newWorkouts} from "./WorkoutFunctions"



class Workout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      daySelect: "Monday",
      workoutWO: "",
      workoutReps: "",
      workoutSets: "",
      browseExercises: "Chest"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = this.state
    console.log(data)

    const WO = {
      daySelect: this.state.daySelect,
      workoutWO: this.state.workoutWO,
      workoutReps: this.state.workoutReps,
      workoutSets: this.state.workoutSets
    }

    newWorkouts(WO).then(res => {
      this.props.history.push("/workout")
    })

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
          <input type="text" name="warmupWO" className="wu-input" onChange={this.handleWOChange} />
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

        <form className="search-box" onSubmit={this.handleBrowseSubmit}>
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

            <button className="browse-btn" type="submit">Browse Workouts</button>

            <div className="search-results">
              
            </div>
        </form>
      </div>
    )
  }
}

export default Workout