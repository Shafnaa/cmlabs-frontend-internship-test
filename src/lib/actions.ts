"use server";

const getCategories = async () => {
  const res = await fetch(
    "http://www.themealdb.com/api/json/v1/1/categories.php",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  return data.categories.map(
    (category: {
      idCategory: string;
      strCategory: string;
      strCategoryThumb: string;
      strCategoryDescription: string;
    }) => category
  );
};

const getMealsByCategory = async (category: string) => {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  return data.meals.map(
    (meal: { strMeal: string; strMealThumb: string; idMeal: string }) => meal
  );
};

const getMealsById = async (id: string) => {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  return data.meals[0];
};

export { getCategories, getMealsByCategory, getMealsById };