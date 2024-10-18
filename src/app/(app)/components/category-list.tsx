import React from "react";
import CategoryCard from "./category-card";

const CategoryList = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
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
      {data.categories.map(
        (category: {
          idCategory: string;
          strCategory: string;
          strCategoryThumb: string;
          strCategoryDescription: string;
        }) => (
          <CategoryCard category={category} key={category.idCategory} />
        )
      )}
    </>
  );
};

export default CategoryList;
