import { NASA_URLS } from "@/data/nasaApi";
import http from "../data/api/httpCommon";

export const getMarsRoverPhotos = async (
  apiKey,
  solDate = 1000,
  camera = "mast",
  page = 1
) => {
  const query = `${NASA_URLS.MARS_ROVER_PHOTOS}rovers/curiosity/photos?sol=${solDate}&camera=${camera}&page=${page}&api_Key=${apiKey}`;

  const result = await http.get(query);
  console.log(result.data.photos);
  return result.data.photos;
};

export const getEpicCameraImageLinks = async (
  apiKey,
  enhanced = false,
  date = "2025-06-26"
) => {
  const query = `${NASA_URLS.EPIC_IMAGES}api/${
    enhanced ? "enhanced" : "natural"
  }/date/${date}?api_Key=${apiKey}`;

  const result = await http.get(query);
  console.log(result.data);
  return result.data;
};

export const getEpicImage = async (apiKey, date, identifier) => {
  const query = `${NASA_URLS.EPIC_IMAGES}archive/natural/${date.replaceAll(
    "-",
    "/"
  )}/png/${identifier}.png?api_key=${apiKey}`;

  const result = await http.get(query);
  console.log(result.data);
  return result.data;
};
