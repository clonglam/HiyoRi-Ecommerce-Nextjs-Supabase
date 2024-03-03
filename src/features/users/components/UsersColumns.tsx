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

import { User } from "@supabase/supabase-js";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const UsersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-left capitalize">UserId</div>,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <Link
          href={`/admin/users/${user.id}`}
          className="text-center font-medium capitalize px-3"
        >
          {user.id}
        </Link>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left capitalize">Name</div>,
    cell: ({ row }) => {
      const user = row.original;
      return <p>{user.user_metadata.name || "-"}</p>;
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left capitalize">Email</div>,
    cell: ({ row }) => {
      const user = row.original;
      return <p>{user.email}</p>;
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="text-left capitalize">Role</div>,
    cell: ({ row }) => {
      const user = row.original;
      return <p>{user.role}</p>;
    },
  },

  {
    id: "actions",
    header: () => <div className="text-center capitalize">Actions</div>,
    cell: ({ row }) => {
      const user = row.original;
      const { toast } = useToast();
      const router = useRouter();

      const promoteAdminHandler = async (userId: string) => {
        try {
          const res = await fetch("/api/users/promote-user", {
            method: "POST",
            body: JSON.stringify({
              userId,
            }),
          });

          const { message } = await res.json();
          toast({
            title: !res.ok ? "Error" : "Success",
            description: message,
          });

          router.refresh();
        } catch (err) {
          toast({
            title: "Error",
            description: "Unexpected Error occured.",
          });
        }
      };

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
              href={`/admin/products/${user.id}`}
              className={buttonVariants({ variant: "ghost" })}
            >
              Edit User
            </Link>
            <Button onClick={() => promoteAdminHandler(user.id)}>
              Promote to Admin
            </Button>
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

export default UsersColumns;
