import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./../../components/ui/input";
import { Button } from "./../../components/ui/button";
import { useRegisterCompany } from "./../../features/hooks/useRegisterCompany";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  contactEmail: z.string().email("Invalid email"),
  industry: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CompanyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useRegisterCompany();

  const onSubmit = (data: FormData) => {
    mutate(data, {
  onSuccess: () => {
    toast.success("Company registered successfully ✅", {
      description: "The company was added to the system.",
    });
    reset(); // clear form
  },
  onError: () => {
    toast.error("Registration failed ❌", {
      description: "Something went wrong. Please try again.",
    });
  },
});

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input {...register("name")} placeholder="Company Name" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <Input {...register("contactEmail")} placeholder="Email" />
        {errors.contactEmail && <p className="text-red-500 text-sm">{errors.contactEmail.message}</p>}
      </div>

      <Input {...register("industry")} placeholder="Industry" />
      <Input {...register("phone")} placeholder="Phone" />
      <Input {...register("address")} placeholder="Address" />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
