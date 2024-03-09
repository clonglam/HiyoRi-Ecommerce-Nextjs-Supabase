"use client";

import { gql } from "@/gql";
import Image from "next/image";
import React from "react";
import { Card } from "../../../components/ui/card";

import { cn, keytoUrl } from "@/lib/utils";
import { useQuery } from "@urql/next";
import { Icons } from "../../../components/layouts/icons";
import { Skeleton } from "../../../components/ui/skeleton";

interface ImagePreviewCard extends React.ComponentProps<typeof Card> {
  mediaId: string;
}

export const FetchMediaQuery = gql(/* GraphQL */ `
  query FetchMediaQuery($mediaId: String) {
    mediasCollection(filter: { id: { eq: $mediaId } }) {
      edges {
        node {
          id
          alt
          key
        }
      }
    }
  }
`);

function ImagePreviewCard({ mediaId }: ImagePreviewCard) {
  const [{ data, fetching, error }] = useQuery({
    query: FetchMediaQuery,
    variables: {
      mediaId: mediaId,
    },
  });

  if (fetching)
    return (
      <div>
        <Skeleton />
      </div>
    );

  if (error) return <div>Error! Media fetch error</div>;

  if (data && data.mediasCollection.edges[0].node) {
    const media = data.mediasCollection.edges[0].node;
    return (
      <Card className="group relative">
        <div className="relative">
          <Image
            className="group-hover:opacity-80 transition-all duration-200"
            src={keytoUrl(media.key)}
            alt={media.alt}
            width={120}
            height={120}
          />
          <Icons.edit
            className={cn(
              "absolute w-5 h-5 right-2 top-2 hidden group-hover:block",
            )}
          />
        </div>
      </Card>
    );
  }
}

export default ImagePreviewCard;
