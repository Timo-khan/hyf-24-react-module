import http from "../data/api/httpCommon";

import { API_KEY } from "@/data/nasaApi";

export const getMarsRoverPhotos = async (
  solDate = 1000,
  camera = "mast",
  page = 1
) => {
  const query = `rovers/curiosity/photos?sol=${solDate}&camera=${camera}&page=${page}&api_Key=${API_KEY}`;

  const result = await http.get(query);
  console.log(result.data.photos);
  return result.data.photos;
};
