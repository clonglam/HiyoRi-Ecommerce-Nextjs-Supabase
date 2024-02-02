"use client"
import React from "react"
import { Icons } from "../icons"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  maxQuantity?: number
  onChange: (...event: any[]) => void
  value: number
}

const QuantityInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ maxQuantity = 8, onChange, value, ...props }, ref) => {
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
          {...props}
          type="number"
          value={value}
          ref={ref}
          onChange={(event) => onChange(event.target.valueAsNumber)}
          className="w-6 flex-1 text-center shadow-none  focus:ring-transparent focus:ring-0 active:ring-0 focus:border-none focus:ring-offset-0 max-w-6 order-2 h-8"
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
