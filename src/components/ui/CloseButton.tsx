"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Icons } from "../layouts/icons";

type Props = {};

function CloseButton({}: Props) {
  const router = useRouter();
  return (
    <button className="absolute right-5 top-5" onClick={() => router.back()}>
      <Icons.close width={20} height={20} />
    </button>
  );
}

export default CloseButton;
