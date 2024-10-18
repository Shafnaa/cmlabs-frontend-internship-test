import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { NavMenu } from "./nav-menu";

const Navbar = async () => {
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

  const meals: {
    strMeal: string;
    idMeal: string;
    strCategory: string;
  }[] = [];

  data.categories.forEach(
    async (category: {
      idCategory: string;
      strCategory: string;
      strCategoryThumb: string;
      strCategoryDescription: string;
    }) => {
      const res = await fetch(
        `http://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`,
        {
          cache: "force-cache",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();

      data.meals.forEach((meal: { strMeal: string; idMeal: string }) => {
        meals.push({
          strMeal: meal.strMeal,
          idMeal: meal.idMeal,
          strCategory: category.strCategory,
        });
      });
    }
  );

  return (
    <>
      <header className="w-full sticky top-0 py-4 z-50 bg-white shadow-md">
        <nav className="container mx-auto flex justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <Icons.logo className="w-8 h-8" />
            mealapps
          </Link>

          <NavMenu
            categories={data.categories.map(
              (category: {
                idCategory: string;
                strCategory: string;
                strCategoryThumb: string;
                strCategoryDescription: string;
              }) => {
                return {
                  title: category.strCategory,
                  href: `/${category.strCategory}`,
                  description: category.strCategoryDescription,
                };
              }
            )}
            meals={meals}
          />

          <div className="hidden md:flex justify-center items-center gap-4">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.instagram.com/saujanashafi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.instagram className="w-4 h-4" />
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/saujanashafi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="w-4 h-4" />
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.github.com/Shafnaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.gitHub className="w-4 h-4" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
