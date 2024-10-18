import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Meal",
};

const page = async ({ params }: { params: { idMeal: string } }) => {
  const res = await fetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();

  return (
    <section className="grid grid-cols-6 space-y-4">
      <div className="col-span-full space-y-2 pb-2 border-b">
        <h1 className="col-span-full text-4xl font-semibold">
          {data.meals[0].strMeal}
        </h1>

        <div className="flex gap-2">
          <Badge>{data.meals[0].strCategory}</Badge>
          <Badge>{data.meals[0].strArea}</Badge>
          {data.meals[0].strDrinkAlternate && (
            <Badge>{data.meals[0].strDrinkAlternate}</Badge>
          )}
          {data.meals[0].strTags && <Badge>{data.meals[0].strTags}</Badge>}
        </div>
      </div>
      <Image
        src={data.meals[0].strMealThumb}
        alt={data.meals[0].strMeal}
        width={480}
        height={480}
        className="col-span-2 shadow-2xl rounded-xl"
      />
      <div className="col-span-4 space-y-2">
        <div className="space-y-2">
          <h2 className="font-medium text-3xl">Instructions:</h2>
          <p
            className="whitespace-pre text-wrap line-clamp-6 truncate"
            dangerouslySetInnerHTML={{ __html: data.meals[0].strInstructions }}
          />
        </div>
        <div className="space-y-2">
          <h2 className="font-medium text-3xl">Ingredients:</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.entries(data.meals[0])
              .filter(
                ([key]) => key.startsWith("strIngredient") && data.meals[0][key]
              )
              .map(([key, value]) => (
                <li key={key}>
                  {value} -{" "}
                  {
                    data.meals[0][
                      `strMeasure${key.replace("strIngredient", "")}`
                    ]
                  }
                </li>
              ))}
          </ul>
        </div>
      </div>
      {data.meals[0].strYoutube && (
        <div className="col-span-full space-y-2">
          <h2 className="text-center text-3xl font-medium">Video Tutorial</h2>
          <div className="max-h-[480px] aspect-video mx-auto overflow-hidden shadow-2xl rounded-xl">
            <iframe
              className="w-full h-full"
              src={data.meals[0].strYoutube.replace("watch?v=", "embed/")}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
