import React from "react";
import { gql, DocumentType } from "@/gql";

import Header from "@/components/layouts/Header";

const ProductCommentsSectionFragment = gql(/* GraphQL */ `
  fragment ProductCommentsSectionFragment on comments {
    id
    comment
    profile {
      name
    }
  }
`);

function ProductCommentsSection({
  comments,
  totalComments,
}: {
  totalComments: number;
  comments: DocumentType<typeof ProductCommentsSectionFragment>[];
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
  );
}

export default ProductCommentsSection;
