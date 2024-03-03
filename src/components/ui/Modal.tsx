import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import CloseButton from "./CloseButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  header: string;
  children: ReactNode;
  containerClassName?: string;
};

function Modal({ header, containerClassName, children }: Props) {
  return (
    <section
      className={cn(
        "fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full",
      )}
    >
      <Card
        className={cn(
          "relative max-w-full inset-0 md:inset-20 md:max-w-2xl lg:max-w-[960px] xl:max-w-[1080px] top-20 mx-auto p-5 border container w-full shadow-lg rounded-md bg-white min-h-[480px]",
          containerClassName,
        )}
      >
        <CardHeader className="p-0 mb-3 md:mb-5">
          <h1 className="font-semibold text-lg leading-5 tracking-tight">
            {header}
          </h1>
          <CloseButton />
        </CardHeader>

        <CardContent className="relative p-0 mb-5 overflow-hidden">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}

export default Modal;
