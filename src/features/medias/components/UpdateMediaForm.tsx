"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { createInsertSchema } from "drizzle-zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import DisabledFormData from "@/components/ui/DisabledFormData";
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
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { InsertMedia, SelectMedia, medias } from "@/lib/supabase/schema";
import { useRouter } from "next/navigation";

type UpdateMediaFormProps = {
  media?: SelectMedia;
};

function UpdateMediaForm({ media }: UpdateMediaFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<InsertMedia>({
    resolver: zodResolver(createInsertSchema(medias)),
    defaultValues: media,
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const deleteHandler = () => {
    console.log("Delete");
    router.push("/admin/medias");
    router.refresh();
    toast({ title: "Image Deleted" });
  };

  const onSubmit = handleSubmit(async (data: InsertMedia) => {
    // startTransition(async () => {
    //   try {
    //     media
    //       ? await updateProductAction(media.id, data)
    //       : await createProductAction(data)
    //     router.push("/admin/products")
    //     router.refresh()
    //     toast({
    //       title: `Product is ${product ? "updated" : "created"}.`,
    //       description: `${data.name}`,
    //     })
    //   } catch (err) {
    //     console.log("err", err)
    //     console.log("unexpected Error Occured")
    //     toast
    //   }
    // })
  });

  return (
    <Form {...form}>
      <form
        id="project-form"
        className="gap-x-5 flex gap-y-5 flex-col px-3"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-5 max-w-[500px]">
          <DisabledFormData data={media.id} label={"Ids"} />

          <FormItem>
            <FormLabel className="text-sm">Alt*</FormLabel>
            <FormControl>
              <Input
                aria-invalid={!!form.formState.errors.alt}
                placeholder="Media Alt."
                {...register("alt")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>

        <DisabledFormData
          label={"Created At:"}
          data={media.createdAt.toString()}
        />
        <DisabledFormData
          label={"Updated At:"}
          data={media.updatedAt.toString()}
        />

        <AlertDialog>
          <AlertDialogTrigger className="text-red-600 text-left">
            Delete Permanently
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={deleteHandler}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <div className="py-8 flex gap-x-5 items-center">
          <Button disabled={isPending} variant={"outline"} form="project-form">
            {media ? "Update" : "Create"}
            {isPending && (
              <Spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
          </Button>
          <Link href="/admin/medias" className={buttonVariants()}>
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default UpdateMediaForm;
