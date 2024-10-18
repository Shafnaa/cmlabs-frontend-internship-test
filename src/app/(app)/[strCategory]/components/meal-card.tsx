import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealCard = ({
  meal,
  category,
}: {
  meal: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  };
  category: string;
}) => {
  return (
    <li>
      <Link href={`/${category}/${meal.idMeal}`} passHref>
        <div className="relative aspect-square flex justify-center items-center overflow-hidden p-4 rounded-md">
          <div className="absolute w-full h-full ">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={480}
              height={480}
              className="w-full h-full object-cover brightness-50 backdrop-brightness-125 backdrop-blur-sm"
            />
          </div>
          <h3 className="relative text-white text-3xl text-center">
            {meal.strMeal}
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default MealCard;
