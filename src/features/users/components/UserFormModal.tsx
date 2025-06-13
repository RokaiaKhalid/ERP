import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "./../../../components/ui/dialog";
import { Input } from "./../../../components/ui/input";
import { Button } from "./../../../components/ui/button";
import { useState } from "react";
import RoleSelector from "./RoleSelector";
import { type User, useCreateUser, useUpdateUser } from "../userApi";
import { toast } from "sonner";
type Props = {
  user?: User;
  isEdit?: boolean;
};

export default function UserFormModal({ user, isEdit }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [role, setRole] = useState<"admin" | "manager" | "team">(user?.role ?? "team");

  const createUser = useCreateUser();
  const updateUser = useUpdateUser();

  const handleSubmit = async () => {
  if (!name || !email) {
    toast.error("Please fill in all fields");
    return;
  }

  const data = { name, email, role };
  try {
    if (isEdit) {
      await updateUser.mutateAsync({ id: user!.id, ...data });
      toast.success("User updated");
    } else {
      await createUser.mutateAsync(data);
      toast.success("User created");
    }
    setOpen(false);
  } catch (error) {
    toast.error("Failed to submit");
  }
};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={isEdit ? "secondary" : "default"}>
          {isEdit ? "Edit" : "Add User"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit User" : "Add New User"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <RoleSelector value={role} onChange={setRole} />
          <Button className="w-full mt-2" onClick={handleSubmit}>
            {isEdit ? "Update" : "Create"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
