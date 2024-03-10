import AdminShell from "@/components/admin/AdminShell";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/features/cms";
import { OrdersColumns } from "@/features/orders";
import { gql } from "@/gql";
import { getClient } from "@/lib/urql";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

type AdminOrdersPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const AdminOrdersPageQuery = gql(/* GraphQL */ `
  query AdminOrdersPageQuery {
    ordersCollection(orderBy: [{ created_at: DescNullsLast }]) {
      edges {
        node {
          __typename
          id
          ...OrderColumnsFragment
        }
      }
    }
  }
`);

async function OrdersPage({ searchParams }: AdminOrdersPageProps) {
  const { data } = await getClient().query(AdminOrdersPageQuery, {});

  if (!data) return notFound();

  return (
    <AdminShell
      heading="Orders"
      description={"Edit orders from the dashboard. "}
    >
      <section className="flex justify-end items-center pb-5 w-full">
        <Link href="/admin/collections/new" className={cn(buttonVariants())}>
          New Order
        </Link>
      </section>

      <DataTable
        columns={OrdersColumns}
        data={data.ordersCollection.edges || []}
      />
    </AdminShell>
  );
}

export default OrdersPage;
