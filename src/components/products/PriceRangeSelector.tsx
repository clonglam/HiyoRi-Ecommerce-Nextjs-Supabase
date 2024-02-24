import React from "react"

type PriceRangeSelectorProps = {
  value: string[]
  onChange: (event: any) => void
}

function PriceRangeSelector({
  value = ["0", "0"],
  onChange,
}: PriceRangeSelectorProps) {
  return (
    <div className="price-range-selector">
      <label htmlFor="minPrice">Min Price: {value[0]}</label>

      <input type="range" min="0" max="1000" />

      <label htmlFor="maxPrice">Max Price: {value[1]}</label>
      {/* <Controller
        name="maxPrice"
        control={control}
        render={({ field }) => (
          <input type="range" min="0" max="1000" {...field} />
        )}
      /> */}
    </div>
  )
}

export default PriceRangeSelector
