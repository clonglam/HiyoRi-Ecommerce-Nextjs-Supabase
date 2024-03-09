"use client";
import React from "react";
import { Icons } from "./icons";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} className="" variant="link">
      <Icons.chevronLeft />
    </Button>
  );
}

export default BackButton;
