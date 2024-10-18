import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MealCardSkeleton = () => {
  return (
    <li>
      <div className="relative aspect-square flex justify-center items-center overflow-hidden p-4 rounded-md">
        <div className="absolute w-full h-full ">
          <Skeleton className="w-full h-full object-cover brightness-50 backdrop-brightness-125 backdrop-blur-sm" />
        </div>
        <Skeleton className="text-white relative h-9 w-3/4" />
      </div>
    </li>
  );
};

export default MealCardSkeleton;
