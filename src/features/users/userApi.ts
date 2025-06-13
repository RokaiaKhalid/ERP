import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "./../../lib/axios";

import { toast } from "sonner"

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "team";
};

export const useUsersQuery = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => (await axios.get("/users")).data,
  });

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Omit<User, "id">) => axios.post("/users", data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: User) => axios.put(`/users/${data.id}`, data),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["users"]}),
  });
};
// src/features/users/userApi.ts
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => axios.delete(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["users"]});
      toast.success("User deleted");
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
  });
};
