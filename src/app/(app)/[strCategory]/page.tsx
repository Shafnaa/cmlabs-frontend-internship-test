import { Suspense } from "react";
import MealList from "./components/meal-list";
import MealCardSkeleton from "./components/meal-card-skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category",
};

const page = ({ params }: { params: { strCategory: string } }) => {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-medium text-center">{params.strCategory} meals</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <Suspense
          fallback={
            <>
              <MealCardSkeleton />
              <MealCardSkeleton />
              <MealCardSkeleton />
              <MealCardSkeleton />
              <MealCardSkeleton />
              <MealCardSkeleton />
              <MealCardSkeleton />
              <MealCardSkeleton />
            </>
          }
        >
          <MealList strCategory={params.strCategory} />
        </Suspense>
      </ul>
    </section>
  );
};

export default page;
