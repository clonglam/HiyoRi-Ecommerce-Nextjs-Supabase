"use client";
import React, { useState } from "react";
import { Icons } from "./icons";
import { Button } from "../ui/button";
import SearchInput from "./SearchInput";

type Props = {};

function MobileSearchInput({}: Props) {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  return (
    <>
      {openSearchBar ? (
        <div className="absolute w-full max-w-xl container">
          <div className="relative">
            <Icons.chevronLeft className="absolute top-0 left-5" size={14} />
            <SearchInput />
          </div>
        </div>
      ) : (
        <Button onClick={() => setOpenSearchBar(true)}>
          <Icons.search size={18} />
        </Button>
      )}
    </>
  );
}

export default MobileSearchInput;
