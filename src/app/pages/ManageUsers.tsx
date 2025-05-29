// pages/ManageUsers.tsx
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./../../components/ui/dialog";
import { Input } from "./../../components/ui/input";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function ManageUsers() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Alice", email: "alice@example.com", role: "Manager" },
    { id: "2", name: "Bob", email: "bob@example.com", role: "TeamMember" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "TeamMember" });

  const addUser = () => {
    const user: User = {
      id: String(Date.now()),
      ...newUser,
    };
    setUsers([...users, user]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Users</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add User</Button>
          </DialogTrigger>
          <DialogContent>
            <div className="space-y-4">
              <Input placeholder="Name" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
              <Input placeholder="Email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
              <Input placeholder="Role (Admin / Manager / TeamMember)" onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} />
              <Button onClick={addUser}>Create</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
