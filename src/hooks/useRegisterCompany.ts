import { useMutation } from "@tanstack/react-query";
import { registerCompany, type CompanyPayload } from "../app/api/companyApi";

export function useRegisterCompany() {
  return useMutation({
    mutationFn: (data: CompanyPayload) => registerCompany(data),
  });
}

