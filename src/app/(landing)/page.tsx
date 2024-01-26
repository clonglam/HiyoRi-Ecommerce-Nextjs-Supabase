import CategoryScrollCards from "@/components/landing/CategoryScrollCards"
import ProductCard from "@/components/products/ProductCard"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { scollCards } from "@/config/categories"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CategoryScrollCards categoryScrollCards={scollCards} />

      <section className="container">
        <div className="py-5">
          <h2 className="font-semibold text-[32px]">Featured Products</h2>
          <p className="max-w-4xl text-[18px] leading-[1.5] tracking-[-2%]">
            Ideas to help Bring Home to Life based on your recently viewed
            products. Share your space on Instagram and tag @Penpengrian
          </p>
        </div>

        <ScrollArea>
          <ProductCard />
        </ScrollArea>
      </section>

      <section className="w-full h-[580px] bg-slate-500 grid grid-cols-12 my-16">
        <div className="relative w-full col-span-8">
          <Image
            src={"/assets/bathroom-planning.jpg"}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="col-span-4 py-20 px-16">
          <h2 className="text-3xl font-semibold mb-3">
            Less is More. Minimal.
          </h2>
          <p className="text-lg tracking-tight mb-12 text-left max-w-md">
            We believe no one should have to choose between the quality they
            want, and the price they can afford. That’s why we make sure our
            products stand up to only the highest quality and sustainability
            standards - and produce them in a way that keeps great design
            affordable for everyone.
          </p>
          <Link href="/shop" className={cn(buttonVariants({ size: "lg" }))}>
            Shop now
          </Link>
        </div>
      </section>
    </main>
  )
}
