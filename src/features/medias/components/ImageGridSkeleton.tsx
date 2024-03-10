import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function ImageGridSkeleton() {
  return (
    <div className="grid max-w-[1200px] mx-auto gap-x-3 gap-y-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 h-[560px] overflow-hidden">
      {[...Array(30)].map((_, index) => (
        <Skeleton className="w-[120px] h-[120px]" key={`skeleton ${index}`} />
      ))}
    </div>
  );
}

export default ImageGridSkeleton;
