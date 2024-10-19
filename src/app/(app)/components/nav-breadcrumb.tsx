"use client";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBreadcrumb = () => {
  const pathname = usePathname();

  return (
    <Breadcrumb className="flex container mx-auto">
      <BreadcrumbList>
        {pathname !== "/" ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex gap-2 items-center">
                <HomeIcon className="w-4 h-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathname.split("/").map((path, index) => {
              if (path === "") return null;

              if (pathname.split("/").length == index + 1)
                return (
                  <>
                    <BreadcrumbSeparator key={index} />
                    <BreadcrumbItem key={index}>
                      <BreadcrumbPage className="capitalize">
                        {path}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                );

              return (
                <>
                  <BreadcrumbSeparator key={index} />
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink asChild>
                      <Link href={`/${path}`} className="capitalize">
                        {path}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              );
            })}
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize flex gap-2 items-center">
              <HomeIcon className="w-4 h-4" />
              Home
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavBreadcrumb;
