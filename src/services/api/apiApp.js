import axios from "axios";

const apiApp = axios.create({
  baseURL: "https://swapi.dev/api"
});

export default apiApp;
