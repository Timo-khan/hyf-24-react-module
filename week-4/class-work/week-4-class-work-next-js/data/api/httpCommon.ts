import axios from "axios";
import { NASA_URLS } from "../nasaApi";

const axiosService = axios.create({
  baseURL: NASA_URLS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosService;
