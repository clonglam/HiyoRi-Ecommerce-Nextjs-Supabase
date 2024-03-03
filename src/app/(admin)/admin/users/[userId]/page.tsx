"use server";

import AdminShell from "@/components/admin/AdminShell";
import { getUser, UpdateUserForm } from "@/features/users";
import { notFound } from "next/navigation";

type UpdateUserPageProps = { params: { userId: string } };

async function UpdateUserPage({ params: { userId } }: UpdateUserPageProps) {
  const { user } = await getUser({ userId });
  if (!user) return notFound();

  return (
    <AdminShell
      heading="Update User"
      description="Edit user by admin."
      showBackButton={true}
    >
      <UpdateUserForm user={user} />
    </AdminShell>
  );
}

export default UpdateUserPage;
