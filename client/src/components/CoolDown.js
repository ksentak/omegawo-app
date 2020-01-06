import React, { Component } from "react"



class CoolDown extends Component {
  render() {
    return (

      <div className="form-box">
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
          <input type="text" name="warmup-wo" className="wu-input" />
          </label>
          <label>
            Reps:
          <input type="text" name="warmup-reps" className="wu-num" />
          </label>
          <label>
            Sets:
          <input type="text" name="wu-sets" className="wu-num" />
          </label>


          <button className="add-wo-btn">Add Cool Down</button>

        </div>

      </div>
    )
  }
}

export default CoolDown