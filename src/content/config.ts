import { defineCollection, z } from 'astro:content';

const prStoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Display name (can be real name or "Anonymous")
    name: z.string(),
    // Title/program type (e.g., "BC PNP Applicant", "Federal Applicant")
    title: z.string(),
    // Location (e.g., "Richmond, BC", "Canada")
    location: z.string(),
    // Profession (optional, e.g., "Software Engineer", "Physician")
    profession: z.string().optional(),
    // Months waiting for IRCC
    waitingMonths: z.number(),
    // Contact email (optional)
    email: z.string().email().optional(),
    // Whether to show as anonymous
    anonymous: z.boolean().default(false),
    // Display order (lower = first)
    order: z.number().default(100),
    // Short teaser text for the card
    teaser: z.string(),
    // Quote to highlight (optional)
    quote: z.string().optional(),
    // Timeline summary (optional)
    timeline: z.string().optional(),
    // Whether this is a template/placeholder
    isTemplate: z.boolean().default(false),
    // Whether this is the "more stories" placeholder
    isPlaceholder: z.boolean().default(false),
  }),
});

export const collections = {
  'pr-stories': prStoriesCollection,
};
