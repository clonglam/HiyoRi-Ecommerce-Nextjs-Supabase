import SectionHeader from "@/components/layouts/SectionHeader"
import FilterSelections from "@/components/products/FilterSelections"
import { ProductCard } from "@/components/products/ProductCard"
import React from "react"

type Props = {}

function ProductsPage({}: Props) {
  const productsList = [
    {
      id: "0001",
      slug: "bild-01",
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      name: "BILD",
      description: `Poster, 41x51(16x20 ")`,
      price: 320,
    },
    {
      id: "0002",
      slug: "bild-02",
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      name: "BILD",
      description: `Poster, 41x51(16x20 ")`,
      price: 320,
    },
    {
      id: "0003",
      slug: "bild-03",
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      name: "BILD",
      description: `Poster, 41x51(16x20 ")`,
      price: 320,
    },
    {
      id: "0004",
      name: "BILD",
      slug: "bild-04",
      description: `Poster, 41x51(16x20 ")`,
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      price: 320,
    },
  ]
  return (
    <div className="container min-h-screen">
      <SectionHeader heading="Shop Now">
        <FilterSelections />

        <section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-8 gap-x-3 py-5">
          {productsList.map(({ id, slug, name, description, price, image }) => (
            <div key={id}></div>
            // <ProductCard
            //   key={id}
            //   id={id}
            //   slug={slug}
            //   name={name}
            //   description={description}
            //   price={price}
            //   image={image}
            // />
          ))}
        </section>
      </SectionHeader>
    </div>
  )
}

export default ProductsPage
