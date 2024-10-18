import { Suspense } from "react";
import CategoryList from "./components/category-list";
import CategoryCardSkeleton from "./components/category-card-skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-medium text-center">
        Find your favourite type of meals!
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <Suspense
          fallback={
            <>
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
            </>
          }
        >
          <CategoryList />
        </Suspense>
      </ul>
    </section>
  );
}
