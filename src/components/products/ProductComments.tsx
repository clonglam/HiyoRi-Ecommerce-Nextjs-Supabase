import React from "react"
import Header from "../layouts/Header"
import { gql, DocumentType } from "@/gql"

const ProductCommentsFragment = gql(/* GraphQL */ `
  fragment ProductCommentsFragment on comments {
    id
    comment
    profile {
      name
    }
  }
`)

function ProductComments({
  comments,
  totalComments,
}: {
  totalComments: number
  comments: DocumentType<typeof ProductCommentsFragment>[]
}) {
  return (
    <Header heading={`Product Comments`}>
      {comments.length === 0 || totalComments === 0 ? (
        <div>There is no Comment</div>
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>{comment.comment}</div>
          ))}
        </div>
      )}
    </Header>
  )
}

export default ProductComments
