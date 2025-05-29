// pages/AssignRoles.tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./../../components/ui/select";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  role: "Admin" | "Manager" | "TeamMember";
}

export default function AssignRoles() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Alice", role: "Manager" },
    { id: "2", name: "Bob", role: "TeamMember" },
  ]);

  const handleRoleChange = (userId: string, newRole: User["role"]) => {
    const updated = users.map((u) => (u.id === userId ? { ...u, role: newRole } : u));
    setUsers(updated);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      <h2 className="text-2xl font-bold">Assign Roles</h2>

      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between border p-4 rounded">
            <span>{user.name}</span>
            <Select
              value={user.role}
              onValueChange={(val) => handleRoleChange(user.id, val as User["role"])}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
                <SelectItem value="TeamMember">TeamMember</SelectItem>
              </SelectContent>
            </Select>
          </li>
        ))}
      </ul>
    </div>
  );
}
