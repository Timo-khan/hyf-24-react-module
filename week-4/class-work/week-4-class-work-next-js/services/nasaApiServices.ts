import { NASA_URLS } from "@/data/nasaApi";
import http from "../data/api/httpCommon";

export const getMarsRoverPhotos = async (
  apiKey: string,
  solDate = 1000,
  camera = "mast",
  page = 1
) => {
  const query: string = `${NASA_URLS.MARS_ROVER_PHOTOS}rovers/curiosity/photos?sol=${solDate}&camera=${camera}&page=${page}&api_Key=${apiKey}`;

  const result = await http.get(query);
  console.log(result.data.photos);
  return result.data.photos;
};

export const getEpicCameraImageLinks = async (
  apiKey: string,
  enhanced = false,
  date = "2025-06-26"
) => {
  const query: string = `${NASA_URLS.EPIC_IMAGES}api/${
    enhanced ? "enhanced" : "natural"
  }/date/${date}?api_Key=${apiKey}`;

  const result = await http.get(query);
  console.log(result.data);
  return result.data;
};
