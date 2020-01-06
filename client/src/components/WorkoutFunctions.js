import axios from "axios"

export const newWorkouts = newWorkout => {
  return axios 
    .post("savedWorkouts/workout", {
      daySelect: newWorkout.daySelect,
      workoutWO: newWorkout.workoutWO,
      workoutReps: newWorkout.workoutReps,
      workoutSets: newWorkout.workoutSets
    })
    .then(res => {
      console.log("Sent!")
    })
}