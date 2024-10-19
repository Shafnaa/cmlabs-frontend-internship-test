import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { NavMenu } from "./nav-menu";
import NavMenuMobile from "./nav-menu-mobile";
import { getCategories, getMealsByCategory } from "@/lib/actions";

const Navbar = async () => {
  const categories = await getCategories();

  const meals: {
    title: string;
    href: string;
  }[] = [];

  categories.forEach(
    async (category: {
      idCategory: string;
      strCategory: string;
      strCategoryThumb: string;
      strCategoryDescription: string;
    }) => {
      const mealsByCategory = await getMealsByCategory(category.strCategory);

      mealsByCategory.forEach((meal: { strMeal: string; idMeal: string }) => {
        meals.push({
          title: meal.strMeal,
          href: `/${category.strCategory}/${meal.idMeal}`,
        });
      });
    }
  );

  return (
    <>
      <header className="w-full sticky top-0 py-4 z-50 bg-white shadow-md px-2">
        <nav className="container mx-auto flex justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <Icons.logo className="w-8 h-8" />
            mealapps
          </Link>

          <NavMenu
            categories={categories.map(
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
          <NavMenuMobile
            categories={categories.map(
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
