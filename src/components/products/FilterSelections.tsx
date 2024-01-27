import React from "react"
import FilterSelection from "./FilterSelection"

type Props = {}

function FilterSelections({}: Props) {
  return (
    <div className="flex space-x-3 mb-8">
      <FilterSelection
        items={[{ value: "armchair", label: "Armchair" }]}
        placeholder="Category"
      />
    </div>
  )
}

export default FilterSelections
