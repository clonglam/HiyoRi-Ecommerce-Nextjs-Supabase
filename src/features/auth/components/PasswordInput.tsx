"use client";

import * as React from "react";

import { Icons } from "@/components/layouts/icons";
import { Button } from "@/components/ui/button";
import { type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative border p-2 border-primary">
        <input
          {...props}
          ref={ref}
          className={cn(
            "pr-10 focus:ring-0 focus-visible:ring-0 focus:border-0 focus:ring-offset-0 focus:outline-none",
            className,
          )}
          type={showPassword ? "text" : "Password"}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === "" || props.disabled}
        >
          {showPassword ? (
            <Icons.hide className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Icons.view className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
