import http from "../data/api/httpCommon";

export const getMeals = async (filter: string = "") => {
  const result = await http.get(`meals?title=${filter}`);
  console.log(result.data.data);
  return result.data.data;
};

export const getMealById = async (id: string) => {
  const path = `meals/by-id/${id}`;

  const result = await http.get(path);
  console.log(result.data.data);
  return result.data.data;
};
