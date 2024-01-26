"use client"
import React from "react"
import { Input } from "../ui/input"
import { Icons } from "../icons"

type Props = {}

function SearchInput({}: Props) {
  return (
    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full flex-1">
      <form>
        <div className="relative">
          <Icons.search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </form>
    </div>
  )
}

export default SearchInput
