const express = require("express")
const savedWorkouts = express.Router()
const cors = require("cors")
const Workout = require("../models/Workout")

savedWorkouts.use(cors())

process.env.SECRET_KEY = "secret"


savedWorkouts.post("/workout", (req, res) => {
	const workoutData = new Workout ({
	  daySelect: req.body.daySelect,
	  workoutWO: req.body.workoutWO,
	  workoutReps: req.body.workoutReps,
	  workoutSets: req.body.workoutSets,
	  userId: req.body.userId
	})
	workoutData.save((err, savedWorkouts) => {
		if (err) return res.json(err);
		res.json(savedWorkouts);
	})
});

savedWorkouts.get("/workout", (req, res) => {
	Workout.find({})
	// .then(res => res.data);
		.then(workout => {
			if (workout) {
				res.json(workout)
			} 
			else {
				res.send("Workout does not exist")
			}
		})
})

savedWorkouts.delete("/workout/:id", (req, res) => {

	Workout.deleteOne({ _id: req.params.id })
		// .then(savedWorkouts => savedWorkouts.remove())
		.then(savedWorkouts => res.json(savedWorkouts))
		.catch(err => res.json(err));
	});


// savedWorkouts.get("/workout", (req, res) => {
// 	Workout.find().sort({daySelect: Monday})
// 	// .then(res => res.data);
// 		.then(workout => {
// 			if (workout) {
// 				res.json(workout)
// 			} 
// 			else {
// 				res.send("Workout does not exist")
// 			}
// 		})
// })

module.exports = savedWorkouts;
