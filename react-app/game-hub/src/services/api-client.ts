import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cdb3d69605034cc08789b6eb8fb88c6c",
  },
});
