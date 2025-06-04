"use client";

import "./mealList.css";

import { useState, useEffect } from "react";

import { getMeals } from "@/services/mealsServices";

export const MealList = () => {
  const [meals, setMeals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getMeals();
      setMeals(response);
    } catch (e) {
      setIsError(true);
      setError(e.message);
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
      {meals.map((x, i) => (
        <div key={i} className="meals-block">
          <p className="meals-head">{x.Title}</p>
          <p className="meals-body">{x.Location}</p>
          <p className="meals-body">{x.Price.toFixed(2)}€</p>
          <p className="meals-body">
            Reserved for: {new Date(x.When).toDateString()}
          </p>
          <p className="meals-body">
            At: {new Date(x.When).toLocaleTimeString()}
          </p>
        </div>
      ))}
    </div>
  );
};
