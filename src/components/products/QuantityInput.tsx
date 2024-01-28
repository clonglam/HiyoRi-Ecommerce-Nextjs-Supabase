"use client"
import React from "react"
import { Icons } from "../icons"

export interface QuantityInputProps {
  value: number
  onChange: (data: number) => void
  maxQuantity?: number
}

const QuantityInput = React.forwardRef<HTMLInputElement, QuantityInputProps>(
  ({ maxQuantity = 8, value, onChange, ...props }, ref) => {
    const addOne = () => {
      if (value < maxQuantity) {
        onChange(value + 1)
      }
    }
    const minusOne = () => {
      if (value > 1) {
        onChange(value - 1)
      }
    }

    return (
      <div className="max-w-36 h-12 border-2 border-input rounded-full relative flex items-center justify-between py-2 px-4">
        <input
          type="number"
          value={value}
          ref={ref}
          onChange={(event) => onChange(event.target.valueAsNumber)}
          className="flex-1 text-center shadow-none  focus:ring-transparent focus:ring-0 active:ring-0 focus:border-none focus:ring-offset-0 max-w-10 order-2 h-8"
          {...props}
        />
        <button type="button" className="text-xl order-1" onClick={minusOne}>
          <Icons.minus />
        </button>
        <button type="button" className="text-xl order-3" onClick={addOne}>
          <Icons.add />
        </button>
      </div>
    )
  }
)

QuantityInput.displayName = "QuantityInput"

export { QuantityInput }
