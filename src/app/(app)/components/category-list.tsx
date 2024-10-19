import React from "react";
import CategoryCard from "./category-card";
import { getCategories } from "@/lib/actions";

const CategoryList = async () => {
  const categories = await getCategories();

  return (
    <>
      {categories.map(
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
