import React from "react";
import MealCard from "./meal-card";

const MealList = async ({ strCategory }: { strCategory: string }) => {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return (
    <>
      {data.meals.map(
        (meal: { strMeal: string; strMealThumb: string; idMeal: string }) => (
          <MealCard meal={meal} category={strCategory} key={meal.idMeal} />
        )
      )}
    </>
  );
};

export default MealList;
