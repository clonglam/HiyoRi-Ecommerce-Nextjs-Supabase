"use client";
import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export interface QuantitiyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (...event: any[]) => void;
  value: number;
  addOneHandler: () => void;
  minusOneHandler: () => void;
}

const QuantityInput = React.forwardRef<HTMLInputElement, QuantitiyInputProps>(
  (
    { onChange, addOneHandler, minusOneHandler, value, className, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "max-w-36 h-12 border-2 border-input rounded-full relative flex items-center justify-between py-2 px-4",
          className,
        )}
      >
        <input
          {...props}
          aria-label="quantity"
          type="number"
          value={value}
          ref={ref}
          onChange={(event) => onChange(event.target.valueAsNumber)}
          className="w-6 flex-1 text-center shadow-none  focus:ring-transparent focus:ring-0 active:ring-0 focus:border-none focus:ring-offset-0 max-w-6 order-2 h-8"
        />
        <button
          type="button"
          className="text-xl order-1"
          onClick={minusOneHandler}
        >
          <Icons.minus aria-label="minus" />
        </button>
        <button
          type="button"
          className="text-xl order-3"
          onClick={addOneHandler}
        >
          <Icons.add aria-label="add" />
        </button>
      </div>
    );
  },
);

QuantityInput.displayName = "QuantityInput";

export { QuantityInput };
export default QuantityInput;
