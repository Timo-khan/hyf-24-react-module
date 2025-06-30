"use client";

import "./mealList.css";

import { useState, useEffect } from "react";

import { MealVm } from "@/models/meals/MealVm";

import { getMeals } from "@/services/mealsServices";

export const MealList = () => {
  const [meals, setMeals] = useState<MealVm[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getMeals();
      setMeals(response);
    } catch (e) {
      setIsError(true);
      setError(String(e));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="meals-wrap">
      {isLoading && <h2 className="loading-head">Loading...</h2>}
      {isError && (
        <div className="meals-error-block">
          <p className="meals-error-head">Something went wrong:</p>
          <p className="meals-error-body">{error ?? "N/A"}</p>
        </div>
      )}
      {/* <pre>{JSON.stringify(meals, null, 2)}</pre> */}
      {meals.map((x, i) => (
        <div key={i} className="meals-block">
          <p className="meals-head">{x.Title}</p>
          <p className="meals-body">{x.Location}</p>
          <p className="meals-body">{x.Price.toFixed(2)}€</p>
          <p className="meals-body">When: {new Date(x.When).toDateString()}</p>
          <p className="meals-body">
            At: {new Date(x.When).toLocaleTimeString()}
          </p>
        </div>
      ))}
    </div>
  );
};
