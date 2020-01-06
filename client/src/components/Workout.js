import React, { Component } from "react"


class Workout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      workoutWO: "",
      workoutReps: "",
      workoutSets: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = this.state
    console.log(data)
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
            <select className="day-selector">
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
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
      </div>
    )
  }
}

export default Workout