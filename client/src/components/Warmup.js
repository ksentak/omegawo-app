import React, { Component } from "react"


class Warmup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      daySelect: "Monday",
      warmupWO: "",
      warmupReps: "",
      warmupSets: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = this.state
    console.log(data)
  }

  handleDSChange = (e) => {
    this.setState({
      daySelect: e.target.value
    })
  }

  handleWOChange = (e) => {
    this.setState({
      warmupWO: e.target.value,
    })
  }

  handleRepChange = (e) => {
    this.setState({
      warmupReps: e.target.value,
    })
  }
  
  handleSetsChange = (e) => {
    this.setState({
      warmupSets: e.target.value,
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
              Warmup:
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
            <button className="add-wo-btn" type="submit">Add Warmup</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Warmup