import AdminShell from "@/components/admin/AdminShell";
import { AdminUserForm } from "@/features/users";
import React from "react";

type Props = {};

function NewUserPage({}: Props) {
  return (
    <AdminShell
      heading="Add New User"
      description="Edit/Create new user by admin."
      showBackButton={true}
    >
      <AdminUserForm />
    </AdminShell>
  );
}

export default NewUserPage;
