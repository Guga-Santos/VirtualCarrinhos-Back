// https://zod.dev/?id=basic-usage
import { z } from 'zod';

const UserZodSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string(),
});

export type IUser = z.infer<typeof UserZodSchema>;

export { UserZodSchema };
