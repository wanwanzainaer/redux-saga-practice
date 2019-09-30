import axios from "axios";

export default axios.create({
  baseURL: "http://rem-rest-api.herokuapp.com/api",
  withCredentials: true
});
