const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  daySelect: {
    type: String
  },
  workoutWO: {
    type: String
  },
  workoutReps: {
    type: String
  },
  workoutSets: {
    type: String
  },
  userId: {
    type: String
  }
});

const Workout = mongoose.model('savedWorkouts', workoutSchema);

module.exports = Workout;
