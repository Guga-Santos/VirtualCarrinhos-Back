import { z } from 'zod';

const AccessoriesZodSchema = z.object({
  name: z.string().min(5),
  description: z.string(),
  image: z.string(),
});

export type IAccessories = z.infer<typeof AccessoriesZodSchema>;

export { AccessoriesZodSchema };
