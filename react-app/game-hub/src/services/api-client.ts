import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "979cc31b1ad04b21a44d3c21ed07a793",
  },
});
