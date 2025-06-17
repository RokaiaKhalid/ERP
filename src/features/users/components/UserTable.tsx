import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./../../../components/ui/table";
import { Input } from "./../../../components/ui/input";
import { Button } from "./../../../components/ui/button";
import { useUsersQuery } from "./../userApi";
import UserFormModal from "./UserFormModal";
import UserActions from "./UserActions";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

export default function UserTable() {
  const { data: users = [], isLoading } = useUsersQuery();
  const [search, setSearch] = useState("");

  const getStatusBadge = (status: string) => {
    const base = "rounded-full px-3 py-1 text-xs font-medium";
    switch (status) {
      case "Active":
        return <span className={`${base} bg-green-100 text-green-700`}>{status}</span>;
      case "Pending":
        return <span className={`${base} bg-yellow-100 text-yellow-700`}>{status}</span>;
      case "Inactive":
        return <span className={`${base} bg-purple-100 text-purple-700`}>{status}</span>;
      default:
        return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>;
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">User Management ({users.length})</h2>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <UserFormModal />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Name"
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          Role <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          All Status <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* User Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#f9f9f9]">
            <TableRow>
              <TableHead>
                <input type="checkbox" />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users
              .filter((u) =>
                u.name?.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/50">
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell className="font-medium text-primary hover:underline cursor-pointer">
                    {user.name}
                  </TableCell>
                  <TableCell className="capitalize">{user.role}</TableCell>
                  <TableCell>Management</TableCell>
                  <TableCell>{getStatusBadge("Active")}</TableCell>
                  <TableCell className="text-right">
                    <UserActions user={user} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination (Basic Placeholder) */}
      <div className="flex justify-end gap-2 pt-2">
        <Button variant="ghost" size="sm" disabled>
          Prev
        </Button>
        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="ghost" size="sm">
          2
        </Button>
        <Button variant="ghost" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
