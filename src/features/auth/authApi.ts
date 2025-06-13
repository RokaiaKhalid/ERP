// src/features/auth/authApi.ts
import axios from "./../../lib/axios";
import { useMutation } from "@tanstack/react-query";

type LoginInput = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: "admin" | "manager" | "team";
  };
};

export const useLoginMutation = () =>
  useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: async (data) => {
      const res = await axios.post("/auth/login", data);
      return res.data;
    },
  });
