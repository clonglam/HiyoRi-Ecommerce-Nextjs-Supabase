import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"

type Props = {}

function HeroSection({}: Props) {
  return (
    <section className="w-full h-screen md:h-[1080px] mx-auto flex justify-center">
      <div className="relative w-full h-full md:h-[1080px]">
        <Image
          alt="Furniture"
          src="/assets/hero-image.jpg"
          width={1920}
          height={1200}
          priority={true}
          className="h-full w-full object-cover "
        />
      </div>

      <div className="container absolute py-8 h-screen md:h-[1080px] w-full">
        <div className="flex flex-col justify-center z-30 h-full">
          <p className="text-sm md:text-md uppercase tracking-widest text-white ">
            hugolam
          </p>
          <h1 className="text-5xl md:text-9xl font-bold text-white my-4 shadow-md">
            Designed for
            <br />
            GraphQL:
          </h1>

          <div className="flex space-x-4 mt-5 max-w-screen">
            <Link
              href="/shop"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-2 border-white text-white rounded px-8 py-3 ",
                "md:px-16 md:py-6",
                "hover:text-zinc-600 hover:bg-white"
              )}
            >
              New in
            </Link>

            <Link
              href="https://github.com/clonglam/HIYORI-master"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "border-2 border-primary text-white rounded px-8 py-3 ",
                "md:px-16 md:py-6"
              )}
            >
              View the Code
            </Link>
          </div>
        </div>
      </div>
    </section>
    // <section className="max-h-[800px] overflow-hidden">
    //   <div>
    //     <Image
    //       src="/assets/hero-image.jpg"
    //       alt="Furniture"
    //       fill
    //       priority={true}
    //       quality={100}
    //       className="h-[90vh] "
    //       sizes="100vw"
    //       style={{
    //         objectFit: "cover",
    //         zIndex: -50,
    //       }}
    //     />
    //   </div>
    // <div className="container relative py-8 h-[90vh] w-full">
    //   <div className="flex flex-col justify-center z-30 h-full">
    //     <p className="text-md uppercase tracking-widest text-white">
    //       hugolam
    //     </p>
    //     <h1 className="text-9xl font-bold text-white my-4 shadow-md">
    //       Designed for
    //       <br />
    //       GraphQL:
    //     </h1>

    //     <div className="flex space-x-4 mt-5">
    //       <Link
    //         href="/shop"
    //         className={cn(
    //           buttonVariants({ variant: "outline", size: "lg" }),
    //           "border-2 border-white text-white rounded px-16 py-6 hover:text-zinc-600 hover:bg-white"
    //         )}
    //       >
    //         New in
    //       </Link>

    //       <Link
    //         href="https://github.com/clonglam/HIYORI-master"
    //         target="_blank"
    //         className={cn(
    //           buttonVariants({ variant: "default", size: "lg" }),
    //           "text-white rounded px-16 py-6 border-2 border-primary"
    //         )}
    //       >
    //         View the Code
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // </section>
  )
}

export default HeroSection
