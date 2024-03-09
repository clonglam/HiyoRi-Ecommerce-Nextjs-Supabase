"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import React from "react";

type PriceRangeFieldProps = {
  label: string;
  value: [number, number];
  defaultValue?: [number, number];
  onMinChange?: (data: number) => void;
  onMaxChange?: (data: number) => void;
  onReset: () => void;
  onValueChange?: (data: [number, number]) => void;
};

function PriceRange({
  label,
  value,
  onReset,
  defaultValue = [0, 10000],
  onValueChange,
  onMinChange,
  onMaxChange,
}: PriceRangeFieldProps) {
  const [priceRange, setPriceRange] =
    React.useState<[number, number]>(defaultValue);

  console.log("priceRange", priceRange);
  return (
    <div className="mt-5 flex px-5 items-end gap-x-5 place-items-center">
      <div className="flex flex-1 flex-col gap-5 overflow-hidden px-1">
        <div className="space-y-4">
          <h3 className="text-sm font-medium tracking-wide text-foreground">
            Price range ($)
          </h3>
          <Slider
            variant="range"
            thickness="thin"
            defaultValue={[0, 10000]}
            max={10000}
            step={10}
            value={priceRange}
            onValueChange={(value: typeof priceRange) => {
              setPriceRange(value);
              onValueChange(value);
            }}
          />
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              max={priceRange[1]}
              className="h-9"
              value={priceRange[0]}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (isNaN(value)) return;
                setPriceRange([value, priceRange[1]]);
                onMinChange(value);
              }}
            />
            <span className="text-muted-foreground">-</span>
            <Input
              type="number"
              inputMode="numeric"
              min={priceRange[0]}
              max={10000}
              className="h-9"
              value={priceRange[1]}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (isNaN(value)) return;
                setPriceRange([priceRange[0], value]);
                onMaxChange(value);
              }}
            />
          </div>
        </div>
      </div>

      <Button
        type="button"
        onClick={() => {
          setPriceRange([0, 10000]);
          onReset();
        }}
      >
        Reset
      </Button>
    </div>
  );
}

export default PriceRange;
