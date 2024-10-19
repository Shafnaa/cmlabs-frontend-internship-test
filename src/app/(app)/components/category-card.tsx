import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({
  category,
}: {
  category: {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  };
}) => {
  return (
    <li>
      <Link href={`/${category.strCategory}`} passHref>
        <div className="relative aspect-video flex justify-center items-center overflow-hidden p-4 rounded-md">
          <div className="absolute w-full h-full ">
            <Image
              src={category.strCategoryThumb}
              alt={category.strCategory}
              width={480}
              height={480}
              className="w-full h-full object-cover brightness-50 backdrop-brightness-125 backdrop-blur-sm"
            />
          </div>
          <h3 className="relative text-white md:text-3xl text-center">{category.strCategory}</h3>
        </div>
      </Link>
    </li>
  );
};

export default CategoryCard;
