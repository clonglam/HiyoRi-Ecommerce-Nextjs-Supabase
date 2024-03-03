"use client";
import React, { useState } from "react";
import { getStripe } from "@/lib/stripe/stripeClient";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import type { CartItems } from "@/features/carts";

type CheckoutButtonProps = React.ComponentProps<typeof Button> & {
  order: CartItems;
  guest: boolean;
};

function CheckoutButton({ order, guest, ...props }: CheckoutButtonProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = async () => {
    setIsLoading(true);

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ orderProducts: order, guest }),
    });

    if (!res.ok) {
      toast({ title: "Somme Error occured" });
      setIsLoading(false);
    }

    const { sessionId } = await res.json();

    setIsLoading(false);
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });
  };
  return (
    <Button
      {...props}
      className={cn("w-full", props.className)}
      onClick={onClickHandler}
      disabled={isLoading}
    >
      {isLoading ? "Loading ...  " : "Check out"}
      {isLoading && (
        <Spinner className="ml-3 h-4 w-4 animate-spin" aria-hidden="true" />
      )}
    </Button>
  );
}

export default CheckoutButton;
