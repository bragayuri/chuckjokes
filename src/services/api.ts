import axios from "axios";

const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default api;
