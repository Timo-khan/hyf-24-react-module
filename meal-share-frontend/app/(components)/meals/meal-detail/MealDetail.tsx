"use client";

import { usePathname } from "next/navigation";
import "./mealDetail.css";
import { useEffect, useState } from "react";
import { MealVm } from "@/models/meals/MealVm";
import { getMealById } from "@/services/mealsServices";

export const MealDetail = () => {
  const [meal, setMeal] = useState<MealVm | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const pathName = usePathname();
  const stringArray = pathName.split("-");
  const mealId = stringArray[stringArray.length - 1];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getMealById(mealId);
      setMeal(response);
    } catch (e) {
      setIsError(true);
      setError(String(e));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="meal-wrap">
      {isLoading && <h2 className="loading-head">Loading...</h2>}
      {isError && (
        <div className="meal-error-block">
          <p className="meal-error-head">Something went wrong:</p>
          <p className="meal-error-body">{error ?? "N/A"}</p>
        </div>
      )}
      {/* {meal && <pre>{JSON.stringify(meal, null, 2)}</pre>} */}
      {meal && (
        <div className="meal-block">
          <p className="meal-head">{meal.Title}</p>
          <p className="meal-description">{meal.Description}</p>
          <p className="meal-body">Price: {meal.Price.toFixed(2)}€</p>
          <p className="meal-body">At: {meal.Location}</p>
          <p className="meal-body">
            When: {new Date(meal.When).toDateString()}
          </p>
          <p className="meal-body">
            At: {new Date(meal.When).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
};
