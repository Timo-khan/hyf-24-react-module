import http from "../data/api/httpCommon";

export const getMarsRoverPhotos = async (
  apiKey,
  solDate = 1000,
  camera = "mast",
  page = 1
) => {
  const query = `rovers/curiosity/photos?sol=${solDate}&camera=${camera}&page=${page}&api_Key=${apiKey}`;

  const result = await http.get(query);
  console.log(result.data.photos);
  return result.data.photos;
};
