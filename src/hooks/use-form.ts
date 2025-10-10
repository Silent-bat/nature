import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useHookForm } from "react-hook-form";
import type { UseFormProps, FieldValues } from "react-hook-form";
import type { z } from "zod";

export function useForm<T extends FieldValues>({
  schema,
  ...formConfig
}: Omit<UseFormProps<T>, "resolver"> & {
  schema: z.ZodType<T, any, any>;
}) {
  return useHookForm<T>({
    ...formConfig,
    resolver: zodResolver(schema),
  });
}
