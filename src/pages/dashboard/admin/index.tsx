// src/pages/dashboard/admin/index.tsx
import UserTable from "./../../../features/users/components/UserTable";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <UserTable />
    </div>
  );
}
