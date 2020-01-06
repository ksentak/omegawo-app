import React, { Component } from "react"


class CoolDown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cooldownWO: "",
      cooldownReps: "",
      cooldownSets: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = this.state
    console.log(data)
  }

  handleWOChange = (e) => {
    this.setState({
      cooldownWO: e.target.value,
    })
  }

  handleRepChange = (e) => {
    this.setState({
      cooldownReps: e.target.value,
    })
  }
  
  handleSetsChange = (e) => {
    this.setState({
      cooldownSets: e.target.value,
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
              Cool Down:
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
            <button className="add-wo-btn" type="submit">Add Cool Down</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CoolDown