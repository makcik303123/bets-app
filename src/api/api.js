import axios from "axios";

const token = "t1-nL1LW0jKw8qtGtYaNBzEb7J7lQ_x-zKRIcvW64yYqknM7zhQ";

const instance = axios.create({
  baseURL: "https://api.pandascore.co",
  headers: { Authorization: "Bearer " + token },
});

export default instance;
