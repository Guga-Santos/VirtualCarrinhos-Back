import { z } from 'zod';

const CarZodSchema = z.object({
  name: z.string().min(5),
  code: z.string(),
  description: z.string(),
  mesures: z.string(),
  wheels: z.string(),
  image: z.string(),
});

export type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema };
