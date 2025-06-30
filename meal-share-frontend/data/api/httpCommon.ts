import axios from "axios";
import { BASE_URL } from "../consts/baseUrl";

const axiosService = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosService;
