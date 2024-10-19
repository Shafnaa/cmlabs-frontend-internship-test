import React from "react";
import MealCard from "./meal-card";
import { getMealsByCategory } from "@/lib/actions";

const MealList = async ({ strCategory }: { strCategory: string }) => {
  const meals = await getMealsByCategory(strCategory);

  return (
    <>
      {meals.map(
        (meal: { strMeal: string; strMealThumb: string; idMeal: string }) => (
          <MealCard meal={meal} category={strCategory} key={meal.idMeal} />
        )
      )}
    </>
  );
};

export default MealList;
