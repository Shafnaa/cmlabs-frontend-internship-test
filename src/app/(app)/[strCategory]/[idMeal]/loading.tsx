import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <section className="grid grid-cols-6 space-y-4 gap-2">
      <div className="col-span-full space-y-2 pb-2 border-b">
        <Skeleton className="col-span-full h-10 w-3/4" />

        <div className="flex gap-2">
          <Badge>
            <Skeleton className="h-4 w-12" />
          </Badge>
          <Badge>
            <Skeleton className="h-4 w-12" />
          </Badge>
        </div>
      </div>
      <Skeleton className="col-span-2 shadow-lg rounded-xl" />
      <div className="col-span-4 space-y-2">
        <div className="space-y-2">
          <h2 className="font-medium text-3xl">Instructions:</h2>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="space-y-2">
          <h2 className="font-medium text-3xl">Ingredients:</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
            <li>
              <Skeleton className="h-4 w-1/2" />
            </li>
          </ul>
        </div>
      </div>

      <div className="col-span-full space-y-2">
        <h2 className="text-center text-3xl font-medium">Video Tutorial</h2>
        <div className="max-h-[480px] aspect-video mx-auto overflow-hidden rounded-xl">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </section>
  );
};

export default loading;
