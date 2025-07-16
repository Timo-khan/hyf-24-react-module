"use client";

import { usePathname } from "next/navigation";
import "./mealDetail.css";
import { useEffect, useRef, useState } from "react";
import { MealVm } from "@/models/meals/MealVm";
import { getMealById, getSoldOutMeals } from "@/services/mealsServices";
import { MODAL_TYPES } from "@/common/modalTypes";
import { Button } from "../../button/Button";
import { Modal } from "../../modals/Modal";

export const MealDetail = () => {
  const [meal, setMeal] = useState<MealVm | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [isModal, setIsModal] = useState<boolean>(false);

  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);
  const modalType = useRef<string>(MODAL_TYPES.Create);

  const pathName = usePathname();
  const stringArray = pathName.split("-");
  const mealId = stringArray[stringArray.length - 1];

  useEffect(() => {
    if (!meal) {
      getData();
    }
    refineData();
  }, [meal]);

  const getData = async () => {
    try {
      const response = await getMealById(mealId);
      setMeal(response);
    } catch (e) {
      setIsError(true);
      setError(String(e));
    }
  };

  const refineData = async () => {
    if (meal != null) {
      try {
        const soldOutMeals: MealVm[] = await getSoldOutMeals();
        const ids: number[] = [];
        soldOutMeals.map((x: MealVm) => ids.push(x.MealId));
        const checkAvailability: boolean = ids.includes(meal.MealId);

        setIsSoldOut(checkAvailability);
      } catch (e) {
        setIsError(true);
        setError(String(e));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const modalToggleHandler = () => {
    setIsModal(!isModal);
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
      {isModal && (
        <Modal
          closeHandler={modalToggleHandler}
          object="reservation"
          reference={Number(mealId)}
          type={modalType.current}
        />
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
      <div className="meal-btn-block">
        {isSoldOut ? (
          <div className="btn-disabled">Sold Out</div>
        ) : (
          <Button
            action={modalToggleHandler}
            appearance="create"
            text="Make A Reservation"
            type="button"
          />
        )}
      </div>
    </div>
  );
};
