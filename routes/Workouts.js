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
	  workoutSets: req.body.workoutSets
	})
	workoutData.save((err, savedWorkouts) => {
		if (err) return res.json(err);
		res.json(savedWorkouts);
	})
});

module.exports = savedWorkouts;
