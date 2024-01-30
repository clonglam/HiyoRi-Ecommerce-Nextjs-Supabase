import Header from "@/components/layouts/Header"
import FilterSelections from "@/components/products/FilterSelections"
import { ProductCard } from "@/components/products/ProductCard"
import { gql } from "@/gql"
import React from "react"

interface ProductsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

function ProductsPage({ searchParams }: ProductsPageProps) {
  const {
    page,
    per_page,
    sort,
    categories,
    subcategories,
    price_range,
    store_ids,
    store_page,
  } = searchParams

  // Products transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 8
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

  // const pageCount = Math.ceil(productsTransaction.total / limit)
  const ProductsRouteQuery = gql(/* GraphQL */ `
    query ProductsRouteQuery {
      products: productsCollection(
        filter: { featured: { eq: true } }
        first: 5
        orderBy: [{ created_at: DescNullsLast }]
      ) {
        edges {
          node {
            id
            ...ProductCardFragment
          }
        }
      }
      collectionScrollCards: collectionsCollection(
        first: 4
        orderBy: [{ order: DescNullsLast }]
      ) {
        edges {
          node {
            id
            ...CollectionCardFragment
          }
        }
      }
    }
  `)

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
      <Header heading="Shop Now" />
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
    </div>
  )
}

export default ProductsPage
