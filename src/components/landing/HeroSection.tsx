import React from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {}

function HeroSection({}: Props) {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Text section */}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-gray-600">
              Wolfwood
            </p>
            <h1 className="text-5xl font-bold text-gray-800 my-4">
              Designed for
              <br />
              adventure
            </h1>
            <div className="flex space-x-4">
              <button className="border border-gray-600 text-gray-600 rounded px-4 py-2">
                New in
              </button>
              <button className="bg-black text-white rounded px-4 py-2">
                Winter Sale
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="flex items-center justify-center">
            <img
              src="/assets/cutingcardImage.jpg"
              alt="Furniture"
              className="rounded-lg shadow-lg max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
  //   return (
  //     <div className="relative h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden">
  //       {/* Background Image */}
  //       <div className="absolute top-0 left-0 w-full h-full z-0">
  //         <Image
  //           src="/assets/cutingcardImage.jpg"
  //           layout="fill"
  //           objectFit="cover"
  //           objectPosition="center"
  //           alt="Elegant Background"
  //           priority
  //         />
  //         {/* Optional: Animated Overlay */}
  //         <div className="absolute inset-0 bg-gradient-to-r  opacity-50 mix-blend-multiply animate-pulse"></div>
  //       </div>

  //       {/* Content */}
  //       <div className="z-10 p-5">
  //         <h1 className="text-5xl font-bold mb-4">Find Your Style</h1>
  //         <p className="text-xl mb-8">
  //           Explore the latest collections on sale now.
  //         </p>
  //         <Link href="/collections">
  //           <p className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
  //             Shop Now
  //           </p>
  //         </Link>
  //       </div>
  //     </div>
  //   )
}

export default HeroSection
