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

export const ProductColumnFragment = gql(/* GraphQL */ `
  fragment ProductColumnFragment on products {
    id
    name
    description
    rating
    slug
    badge
    price
    badge
    featured
    featuredImage: medias {
      id
      key
      alt
    }
    collections {
      id
      label
      slug
    }
  }
`);

const ProductsColumns: ColumnDef<{
  node: DocumentType<typeof ProductColumnFragment>;
}>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left capitalize">Product Name</div>,
    cell: ({ row }) => {
      const product = row.original.node;

      return (
        <Link
          href={`/admin/products/${product.id}`}
          className="text-center font-medium capitalize px-3 hover:underline"
        >
          {product.name}
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
    accessorKey: "Collection",
    header: () => <div className="">Collection</div>,
    cell: ({ row }) => {
      const product = row.original.node;

      return (
        <div className="font-medium">
          {product.collections ? product.collections.label : "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "featured",
    header: () => <div className="">Featured</div>,
    cell: ({ row }) => {
      const product = row.original.node;

      return <div className="font-medium">{`${product.featured}`}</div>;
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="">Price</div>,
    cell: ({ row }) => {
      const product = row.original.node;

      return <div className="font-medium">{`$ ${product.price}`}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center capitalize">Actions</div>,
    cell: ({ row }) => {
      const product = row.original.node;

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
              href={`/admin/products/${product.id}`}
              className={buttonVariants({ variant: "ghost" })}
            >
              Edit Product
            </Link>
            {/* <DeleteCategoryDialog categoryId={category.id} /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const DeleteCategoryDialog = ({ categoryId }: { categoryId: string }) => {
  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // await deleteCategoryAction(categoryId)
  };
  return (
    <DeleteDialog
      onClickHandler={onClickHandler}
      title="Delete Proejct"
      actionLabel="Delete"
    />
  );
};

export default ProductsColumns;
