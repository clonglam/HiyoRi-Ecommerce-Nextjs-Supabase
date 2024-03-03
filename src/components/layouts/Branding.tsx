import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = { className?: string };

function Branding({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn("text-2xl font-medium align-middle", className)}
    >
      HIYORI
    </Link>
  );
}

export default Branding;
