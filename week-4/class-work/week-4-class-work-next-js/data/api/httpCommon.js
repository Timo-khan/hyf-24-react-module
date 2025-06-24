import axios from "axios";
import { NASA_URLS } from "../nasaApi";

const axiosService = axios.create({
  baseURL: NASA_URLS.MARS_ROVER_PHOTOS,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosService;
