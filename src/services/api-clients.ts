import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "017579d8b5774c1ca3f1dc4e66834f12",
  },
});
