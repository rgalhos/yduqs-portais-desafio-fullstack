"use server";

import { TSignUpFormData } from "./_schema/SignUpFormSchema";
import { client } from "@/lib/api";

export const handleSubmitApplicant = (data: TSignUpFormData) => {
  return client.post("/applicant", { ...data });
};
