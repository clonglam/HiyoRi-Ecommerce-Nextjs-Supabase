"use client"
import React from "react"
import { FilterFormData } from "./FilterSelections"
import { Button } from "../../../components/ui/button"
import { Icons } from "../../../components/icons"
import { Badge } from "../../../components/ui/badge"
import { cn } from "@/lib/utils"

type FilterBadgesProps = {
  currentFilter: FilterFormData
  onClickHandler: (key: string) => void
}

function FilterBadges({ currentFilter, onClickHandler }: FilterBadgesProps) {
  console.log("current Filter", currentFilter)
  return (
    <section className="flex gap-x-10">
      {Object.entries(currentFilter).map(([key, value]) => {
        console.log("key", key)
        if (typeof value === "string") {
          return (
            <Badge key={key} className="px-3 py-2 gap-x-3">
              {value}
              <button
                onClick={() => onClickHandler(key)}
                className={cn("rounded-full")}
              >
                <Icons.close width={15} height={15} />
              </button>
            </Badge>
          )
        }
        if (typeof value == "object") {
          value.map((v) => (
            <Badge key={key + v} className="px-3 py-2 gap-x-3">
              {value}
              <button
                onClick={() => onClickHandler(key)}
                className={cn("rounded-full")}
              >
                <Icons.close width={15} height={15} />
              </button>
            </Badge>
          ))
        }
      })}
    </section>
  )
}

export default FilterBadges
