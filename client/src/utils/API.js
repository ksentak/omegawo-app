import axios from "axios";

export default {
	getAllWorkouts: function() {
		return axios.get("/savedWorkouts/workout")
		.then(res => res.data);
	}

	// getMonday: function() {
	// 	return axios.get("")
	// 	.then(res => res.data);
	// },

	// getTuesday: function (id) {
	// 	return axios.delete("/api/books/" + id)
	// 	.then(res => res.data);
	// }
};
