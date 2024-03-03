import { redirect } from "next/navigation";

async function AdminDashboard() {
  redirect("/admin/dashboard");
}

export default AdminDashboard;
