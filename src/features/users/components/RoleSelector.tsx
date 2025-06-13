import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./../../../components/ui/select";

type Props = {
  value: string;
  onChange: (value: "admin" | "manager" | "team") => void;
};

export default function RoleSelector({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="team">Team Member</SelectItem>
      </SelectContent>
    </Select>
  );
}
