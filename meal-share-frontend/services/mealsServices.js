import http from "../data/api/httpCommon";

export const getMeals = async () => {
  const result = await http.get("meals");
  console.log(result.data.data);
  return result.data.data;
};
