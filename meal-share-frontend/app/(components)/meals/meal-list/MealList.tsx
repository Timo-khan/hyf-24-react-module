"use client";

import "./mealList.css";

import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";

import { getMeals } from "@/services/mealsServices";

import { MealVm } from "@/models/meals/MealVm";
import { ErrorResponse } from "@/models/api/ErrorResponse";
import { Arrow } from "@/public/svgs/Arrow";

type SortDir = "asc" | "desc";
type SortKey = "mealId" | "price" | "title";

export const MealList = () => {
  const [meals, setMeals] = useState<MealVm[]>([]);

  const [filter, setFilter] = useState<string>("");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [sortKey, setSortKey] = useState<SortKey>("mealId");

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsError(false);
    setError("");
    fetchData(filter, sortKey, sortDir);
  }, [filter, sortDir, sortKey]);

  const fetchData = async (
    filter: string = "",
    sortKey: string,
    sortDir: string
  ) => {
    try {
      const response = await getMeals(filter, sortKey, sortDir);
      setMeals(response);
    } catch (e: unknown) {
      const error: ErrorResponse = e as ErrorResponse;
      setMeals([]);
      if (error.response.status != 404) {
        setIsError(true);
        setError(String(error.message ?? ""));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const sortKeyInputHandler = () => {
    if (sortKey === "mealId") {
      setSortKey("title");
    } else if (sortKey === "title") {
      setSortKey("price");
    } else {
      setSortKey("mealId");
    }
  };

  const toggleSortDirHandler = () => {
    if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortDir("asc");
    }
  };

  return (
    <div className="meals-container">
      <div className="meals-form">
        <input
          className="meals-input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler(e)}
          type="text"
          placeholder="Find a Meal"
        />
        <div className="meals-select-wrap">
          <div onClick={sortKeyInputHandler} className="meals-select">
            <span className="meals-select-fixed">Sort Meals on - </span>
            <div
              className={
                sortKey === "mealId"
                  ? "meals-options"
                  : sortKey === "price"
                  ? "meals-options option-price"
                  : "meals-options option-title"
              }
            >
              <span className="meals-option">Meal</span>
              <span className="meals-option">Price</span>
            </div>
          </div>
          <div onClick={toggleSortDirHandler} className="meals-sort-dir-box">
            <Arrow appearance={sortDir === "asc" ? "arrow asc" : "arrow"} />
            <Arrow
              appearance={sortDir === "desc" ? "arrow down desc" : "arrow down"}
            />
          </div>
        </div>
      </div>
      <div className="meals-wrap">
        {isLoading && <h2 className="loading-head">Loading...</h2>}
        {isError && (
          <div className="meals-error-block">
            <p className="meals-error-head">Something went wrong:</p>
            <p className="meals-error-body">{error ?? "N/A"}</p>
          </div>
        )}
        {/* <pre>{JSON.stringify(meals, null, 2)}</pre> */}
        {meals.length != 0 &&
          meals.map((x, i) => (
            <Link
              href={`/meals/meal-details-${x.MealId}`}
              key={i}
              className="meals-block"
            >
              <p className="meals-head">{x.Title}</p>
              <p className="meals-body">{x.Price.toFixed(2)}€</p>
            </Link>
          ))}
      </div>
      <p className="meals-nor">Number of Results : {meals.length}</p>
    </div>
  );
};
