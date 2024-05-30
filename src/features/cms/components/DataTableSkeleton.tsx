import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function DataTableSkeleton() {
  return (
    <div className="w-full  border p-2 flex flex-col gap-y-3">
      <div className="grid grid-cols-8 gap-x-5">
        <Skeleton className="h-6" />
        <Skeleton className="h-6 col-span-3" />
        <Skeleton className="h-6 col-span-2" />
        <Skeleton className="h-6 " />
        <Skeleton className="h-6" />
      </div>

      <Skeleton className="h-8" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
    </div>
  );
}

export default DataTableSkeleton;
