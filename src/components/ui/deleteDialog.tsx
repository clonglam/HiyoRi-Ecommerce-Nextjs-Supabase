"use client";
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./button";

type DeleteDialogProps = {
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  triggerLabel?: string;
  title?: string;
  description?: string;
  cancelLabel?: string;
  actionLabel?: string;
};

function DeleteDialog({
  onClickHandler,
  title,
  description,
  triggerLabel,
  actionLabel,
  cancelLabel,
}: DeleteDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">{triggerLabel || "Delete"}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {title || "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {description ||
              "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel || "Cancel"}</AlertDialogCancel>
          <AlertDialogAction onClick={onClickHandler}>
            {actionLabel || "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteDialog;
