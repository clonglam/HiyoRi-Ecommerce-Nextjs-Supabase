import AdminShell from "@/components/admin/AdminShell";
import { CollectionForm } from "@/features/collections";

type Props = {};

async function NewProjectPage({}: Props) {
  return (
    <AdminShell
      heading="Add Collection"
      description="Input the field below, after that press Add Collection button to save the project."
    >
      <CollectionForm />
    </AdminShell>
  );
}

export default NewProjectPage;
