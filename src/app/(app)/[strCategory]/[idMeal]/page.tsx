import { Badge } from "@/components/ui/badge";
import { getMealsById } from "@/lib/actions";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Meal",
};

const page = async ({ params }: { params: { idMeal: string } }) => {
  const meal = await getMealsById(params.idMeal);

  return (
    <section className="flex flex-col md:grid md:grid-cols-6 gap-2 md:gap-8 space-y-4">
      <div className="col-span-full space-y-2 pb-2 border-b">
        <h1 className="text-4xl font-semibold">{meal.strMeal}</h1>

        <div className="flex gap-2 flex-wrap">
          <Badge>{meal.strCategory}</Badge>
          <Badge>{meal.strArea}</Badge>
          {meal.strDrinkAlternate && <Badge>{meal.strDrinkAlternate}</Badge>}
          {meal.strTags && <Badge>{meal.strTags}</Badge>}
        </div>
      </div>
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={480}
        height={480}
        className="col-span-full md:col-span-2 w-full aspect-square shadow-2xl rounded-xl"
      />
      <div className="col-span-4 space-y-2">
        <div className="space-y-2">
          <h2 className="font-medium text-3xl">Instructions:</h2>
          <p
            className="whitespace-pre text-wrap"
            dangerouslySetInnerHTML={{ __html: meal.strInstructions }}
          />
        </div>
        <div className="space-y-2">
          <h2 className="font-medium text-3xl">Ingredients:</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.entries(meal)
              .filter(([key]) => key.startsWith("strIngredient") && meal[key])
              .map(([key, value]) => (
                <li key={key}>
                  {value} -{" "}
                  {meal[`strMeasure${key.replace("strIngredient", "")}`]}
                </li>
              ))}
          </ul>
        </div>
      </div>
      {meal.strYoutube && (
        <div className="col-span-full space-y-2">
          <h2 className="text-center text-3xl font-medium">Video Tutorial</h2>
          <div className="max-h-[480px] aspect-video mx-auto overflow-hidden shadow-2xl rounded-xl">
            <iframe
              className="w-full h-full"
              src={meal.strYoutube.replace("watch?v=", "embed/")}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
