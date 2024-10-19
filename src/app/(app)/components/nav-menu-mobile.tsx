import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const NavMenuMobile = ({
  categories,
  meals,
}: {
  categories: { title: string; href: string; description: string }[];
  meals: { title: string; href: string }[];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <ScrollArea className="h-[99%]">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-1 text-lg font-semibold md:text-base"
            >
              <Icons.logo className="h-8" />
              <span className="text-xs font-poppins leading-none">
                mealapps
              </span>
            </Link>

            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>

            <div className="flex flex-col">
              <span>Category</span>
              <ul>
                {categories.map((category) => (
                  <li key={category.title}>
                    <Link
                      href={category.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <span>Meals</span>
              <ul>
                {meals.map((meal, idx) => (
                  <li key={idx}>
                    <Link
                      href={meal.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {meal.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenuMobile;
