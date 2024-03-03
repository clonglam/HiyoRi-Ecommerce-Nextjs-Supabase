import AdminShell from "@/components/admin/AdminShell";
import { gql } from "@/gql";
import { getClient } from "@/lib/urql";

import { notFound } from "next/navigation";
import { CollectionForm } from "@/features/collections";

type EditCollectionPageProps = {
  params: {
    collectionId: string;
  };
};

const updateCollectionPageQuery = gql(/* GraphQL */ `
  query UPDATE_COLLECTION_PAGE_QUERY($collectionId: String) {
    collectionsCollection(filter: { id: { eq: $collectionId } }, first: 1) {
      edges {
        node {
          __typename
          id
          ...CollectionFromFragment
        }
      }
    }
  }
`);

async function EditCollectionPage({
  params: { collectionId },
}: EditCollectionPageProps) {
  const { data } = await getClient().query(updateCollectionPageQuery, {
    collectionId,
  });
  if (!data || !data?.collectionsCollection?.edges[0]) return notFound();

  return (
    <AdminShell
      heading="Add Collection"
      description="Input the field below, after that press add Collections."
    >
      <div className="">
        <CollectionForm collection={data.collectionsCollection.edges[0].node} />
      </div>
    </AdminShell>
  );
}

export default EditCollectionPage;
