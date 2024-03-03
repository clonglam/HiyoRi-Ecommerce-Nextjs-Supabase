"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { PasswordInput } from "@/features/auth";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { AdminUserFormData, adminUserShcema } from "../validations";

type AdminUserFormProps = {
  user?: User;
};

function UpdateUserForm({ user }: AdminUserFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<AdminUserFormData>({
    resolver: zodResolver(adminUserShcema),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit(
    async ({ name, email, password }: AdminUserFormData) => {
      //   startTransition(async () => {
      //     try {
      //       await createUser({ email, password, name })
      //       router.push("/admin/users")
      //       toast({
      //         title: "Created a new user.",
      //         description: `${name} is created.`,
      //       })
      //     } catch (err) {
      //       toast({
      //         title: "Error",
      //         description: `${err.message}`,
      //       })
      //     }
      //   })
    },
  );

  return (
    <Form {...form}>
      <form
        id="project-form"
        className="gap-x-5 flex gap-y-5 flex-col"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-5 max-w-[480px] px-5">
          {/* <FormItem>
            <FormLabel className="text-sm">Name*</FormLabel>
            <FormControl>
              <Input
                defaultValue={user?.name || ""}
                aria-invalid={!!form.formState.errors.name}
                placeholder="Type User Name."
                {...register("name")}
              />
            </FormControl>
            <FormDescription>
              This will shown when the user is logined.
            </FormDescription>
            <FormMessage />
          </FormItem> */}

          <FormItem>
            <FormLabel className="text-sm">Email*</FormLabel>
            <FormControl>
              <Input
                defaultValue={user?.email || ""}
                aria-invalid={!!form.formState.errors.email}
                placeholder="Type Product slug."
                {...register("email")}
              />
            </FormControl>
            <FormDescription>
              User use email to login their account.
            </FormDescription>
            <FormMessage />
          </FormItem>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Password*</FormLabel>
                <FormControl>
                  <PasswordInput
                    aria-invalid={!!form.formState.errors}
                    placeholder="Type Password."
                    {...field}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormDescription>
                    Create a password for this account.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="py-8 flex gap-x-5 items-center">
          <Button disabled={isPending} variant={"outline"} form="project-form">
            {user ? "Update" : "Create"}
            {isPending && (
              <Spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
          </Button>
          <Link href="/admin/categories" className={buttonVariants()}>
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default UpdateUserForm;
