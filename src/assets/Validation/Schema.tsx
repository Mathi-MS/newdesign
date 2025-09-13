import { z } from "zod";
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(12, { message: "Password must be not more than 12 characters" }),
  rememberMe: z.boolean().optional(),
});
export const webContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Full Name is required" })
    .min(3, { message: "Full Name must be at least 3 characters" })
    .trim(),
  
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),

  mobileNumber: z
    .string()
    .min(1, { message: "Mobile Number is required" })
    .min(10, { message: "Mobile Number must be at least 10 digits" })
    .max(15, { message: "Mobile Number must be not more than 15 digits" })
    .regex(/^\+?[0-9]{7,15}$/, { message: "Invalid phone number" }),

  message: z
    .string()
    .min(1, { message: "Project description is required" })
    .trim(),
});