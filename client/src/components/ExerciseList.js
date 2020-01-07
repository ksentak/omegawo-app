import React, { Component } from "react"

import searchResults from "./workouts.json"


class ExerciseList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults,
      browseExercises: "Chest",
      newArr: [],
      workoutWO: "",
    }
  }

  handleBrowseSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.browseExercises)
  }

  handleBEChange = (e) => {
    this.setState({
      browseExercises: e.target.value
    })
  }

  passTheWO = () => {
    this.setState({
      workoutWO: 
    })
  }

  render() {

    return (

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
          {this.state.searchResults.map(item => (
            <div>
              <div className="bold_name">{item.name}</div>
              <span className="category">Category: {item.category}</span>
              <span className="link"><a href={item.link} target="_blank">Youtube Example</a></span>
              <button className="addtoplan" onClick={this.passTheWO}>Add To Plan</button>
              <hr />
            </div>

          ))}
        </div>

      </form>
    )
  }
}

export default ExerciseList