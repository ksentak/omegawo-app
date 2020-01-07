import axios from "axios";

export default {
	getAllWorkouts: function() {
		return axios.get("/savedWorkouts/workout")
		.then(res => res.data);
	}
};
