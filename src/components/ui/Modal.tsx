import React, { ReactNode } from "react"
import CloseButton from "./CloseButton"
import { cn } from "@/lib/utils"

type Props = {
  header: string
  children: ReactNode
  containerClassName?: string
}

function Modal({ header, containerClassName, children }: Props) {
  return (
    <div
      className={cn(
        "fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      )}
    >
      <div
        className={cn(
          "relative top-20 mx-auto p-5 border container w-full shadow-lg rounded-md bg-white min-h-[680px]",
          containerClassName
        )}
      >
        <div className="mb-5">
          <h1 className="font-semibold text-lg leading-5 tracking-tight">
            {header}
          </h1>
          <CloseButton />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
