import { DocumentType } from "@/gql"
import React from "react"
import Header from "../layouts/Header"
import ProductCard, { ProductCardFragment } from "./ProductCard"

export type RecommendationProductsProps =
  React.HTMLAttributes<HTMLDivElement> & {
    recommendationsEdge: { node: DocumentType<typeof ProductCardFragment> }[]
  }

function RecommendationProducts({
  recommendationsEdge,
}: RecommendationProductsProps) {
  return (
    <Header heading={`We Think You'll Love`}>
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-x-8 ">
        {recommendationsEdge &&
          recommendationsEdge.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
          ))}
      </div>
    </Header>
  )
}

export default RecommendationProducts
