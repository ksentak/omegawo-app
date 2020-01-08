import axios from "axios";

export default {
	getAllWorkouts: function() {
		return axios.get("/savedWorkouts/workout")
		.then(res => res.data);
	},

	deleteWorkouts: function(id) {
		return axios.delete(`/savedWorkouts/workout/${id}`)
		.then (res => res.data)
	}
};
