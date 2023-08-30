import axios from "axios";

const token = "t1-nL1LW0jKw8qtGtYaNBzEb7J7lQ_x-zKRIcvW64yYqknM7zhQ";

const instance = axios.create({
	baseURL: "https://api.pandascore.co",
	headers: { Authorization: "Bearer " + token },
});

const apiKey = "pub_285154584dae63c1495229b7a171b8a35c666";

export { instance, apiKey };
