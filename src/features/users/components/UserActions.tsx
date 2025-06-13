import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "./../../../components/ui/button";
import ConfirmDeleteDialog from "./../../../components/confirm/ConfirmDeleteDialog";
import UserFormModal from "./UserFormModal";
import { type User, useDeleteUser } from "../userApi";

export default function UserActions({ user }: { user: User }) {
  const deleteUser = useDeleteUser();

  return (
    <div className="flex gap-1 justify-end">
      <Button size="icon" variant="ghost">
        <Eye className="h-4 w-4 text-muted-foreground" />
      </Button>
      <UserFormModal user={user} isEdit />
      <ConfirmDeleteDialog
        onConfirm={() => deleteUser.mutate(user.id)}
        trigger={
          <Button size="icon" variant="ghost">
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        }
      />
    </div>
  );
}
