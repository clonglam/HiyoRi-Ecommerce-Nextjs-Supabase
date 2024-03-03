"use client";
import { Progress } from "@/components/ui/progress";
import React from "react";

type Props = {};

function OrderProgress({}: Props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(18), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-8 min-h-[120px] w-[80%] text-center">
      <div className="absolute left-0 bg-muted-foreground h-5 w-5 rounded-full z-30" />
      <div className="absolute left-1/3 bg-zinc-200 h-5 w-5 rounded-full z-30" />
      <div className="absolute left-2/3 bg-zinc-200 h-5 w-5 rounded-full z-30" />
      <div className="absolute right-0 bg-zinc-200 h-5 w-5 rounded-full z-30" />

      <div className="absolute bottom-0 w-full h-12">
        <span className="absolute left-0 text-center -translate-x-1/2">
          Ordered
        </span>
        <div className="absolute left-1/3 -translate-x-1/2">Shipped</div>
        <div className="absolute left-2/3  -translate-x-1/2">
          Out for delivery
        </div>
        <div className="absolute right-0 translate-x-1/2">Delivered</div>
      </div>
      <Progress value={progress} className="my-2" />
    </section>
  );
}

export default OrderProgress;
