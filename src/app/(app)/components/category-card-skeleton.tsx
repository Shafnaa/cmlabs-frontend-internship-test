import { Skeleton } from "@/components/ui/skeleton";

const CategoryCardSkeleton = () => {
  return (
    <li>
      <div className="relative aspect-video flex justify-center items-center overflow-hidden p-4 rounded-md">
        <div className="absolute w-full h-full ">
          <Skeleton className="w-full h-full object-cover brightness-50 backdrop-brightness-125 backdrop-blur-sm" />
        </div>
        <Skeleton className="text-white relative h-9 w-3/4 mx-auto" />
      </div>
    </li>
  );
};

export default CategoryCardSkeleton;
