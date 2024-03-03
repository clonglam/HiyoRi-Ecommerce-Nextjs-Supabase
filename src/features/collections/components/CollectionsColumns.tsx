"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import DeleteDialog from "@/components/ui/deleteDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { gql, DocumentType } from "@/gql";

export const CollectionColumnsFragment = gql(/* GraphQL */ `
  fragment CollectionColumnsFragment on collections {
    id
    title
    label
    description
    slug
  }
`);

const CollectionsColumns: ColumnDef<{
  node: DocumentType<typeof CollectionColumnsFragment>;
}>[] = [
  {
    accessorKey: "label",
    header: () => <div className="text-left capitalize">Label</div>,
    cell: ({ row }) => {
      const collection = row.original.node;

      return (
        <Link
          href={`/admin/collections/${collection.id}`}
          className="text-center font-medium capitalize px-3 hover:underline"
        >
          {collection.label}
        </Link>
      );
    },
  },
  {
    accessorKey: "slug",
    header: () => <div className="">Slug</div>,
    cell: ({ row }) => {
      const product = row.original.node;

      return <div className="font-medium">{product.slug}</div>;
    },
  },
  {
    accessorKey: "title",
    header: () => <div className="text-left capitalize">Title</div>,
    cell: ({ row }) => {
      const collection = row.original.node;

      return (
        <p className="font-medium capitalize px-3 hover:underline">
          {collection.title}
        </p>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center capitalize">Actions</div>,
    cell: ({ row }) => {
      const collection = row.original.node;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="flex flex-col items-start"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <Link
              href={`/admin/collections/${collection.id}`}
              className={buttonVariants({ variant: "ghost" })}
            >
              Edit Collections
            </Link>
            {/* <DeleteCategoryDialog categoryId={category.id} /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const DeleteCollectionDialog = ({ collectionId }: { collectionId: string }) => {
  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // await deleteCategoryAction(categoryId)
  };
  return (
    <DeleteDialog
      onClickHandler={onClickHandler}
      title="Delete Collection"
      actionLabel="Delete"
    />
  );
};

export default CollectionsColumns;
