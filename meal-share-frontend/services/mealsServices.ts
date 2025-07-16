import http from "../data/api/httpCommon";

export const getMeals = async (
  filter: string = "",
  sortKey: string = "mealId",
  sortDir: string = "asc"
) => {
  const path = `meals?title=${filter}&sortKey=${sortKey}&sortDir=${sortDir}`;

  const result = await http.get(path);
  console.log(result.data.data);
  return result.data.data;
};

export const getMealById = async (id: string) => {
  const path = `meals/by-id/${id}`;

  const result = await http.get(path);
  console.log(result.data.data);
  return result.data.data;
};

export const getSoldOutMeals = async () => {
  const result = await http.get("meals?availableReservations=false");
  console.log(result.data.data);
  return result.data.data;
};
