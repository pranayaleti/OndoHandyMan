"use server";

import { z } from "zod";
import { sendLead } from "./send-lead";

type Status = "idle" | "success" | "error";

export type ContactFormState = {
  status: Status;
  errors: Record<string, string>;
  message: string;
};

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .min(5, "Your email looks too short."),
  phone: z
    .string()
    .optional()
    .transform((val) => val?.trim() ?? ""),
  service: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Add a few more details about your project."),
});

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = formSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0]?.toString() ?? "form";
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }

    return {
      status: "error",
      errors: fieldErrors,
      message: "Please double-check the highlighted fields.",
    };
  }

  try {
    await sendLead(parsed.data);
    return {
      status: "success",
      errors: {},
      message: "",
    };
  } catch (error) {
    console.error("Contact form submission failed", error);
    return {
      status: "error",
      errors: {},
      message: "We couldn’t send your request right now. Please try again in a moment or call us directly.",
    };
  }
}
