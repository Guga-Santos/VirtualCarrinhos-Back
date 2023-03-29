import { z } from 'zod';

const AccessoriesZodSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(5),
  image: z.string(),
});

export type IAccessories = z.infer<typeof AccessoriesZodSchema>;

export { AccessoriesZodSchema };
