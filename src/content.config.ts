import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const site = defineCollection({
	loader: glob({ pattern: 'site.json', base: './src/content/settings' }),
	schema: z.object({
		pageTitle: z.string(),
		social: z.object({
			x: z.string(),
			telegram: z.string(),
			email: z.string(),
		}),
	}),
});

const countdown = defineCollection({
	loader: glob({ pattern: 'countdown.json', base: './src/content/settings' }),
	schema: z.object({
		city: z.string(),
		venue: z.string().optional(),
		timezone: z.string(),
		dates: z.array(z.string()),
	}),
});

const goals = defineCollection({
	loader: glob({ pattern: 'goals.json', base: './src/content/settings' }),
	schema: z.object({
		generalGoals: z.array(z.string()),
		stretchGoals: z.array(z.string()),
	}),
});

const timeline = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/timeline' }),
	schema: z.object({
		title: z.string(),
		dateLabel: z.string().optional(),
		startDate: z.string(),
		endDate: z.string(),
		detail: z.string().optional(),
		link: z.string().optional(),
		linkLabel: z.string().optional(),
		order: z.number(),
	}),
});

const goods = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/goods' }),
	schema: z.object({
		name: z.string(),
		image: z.string().optional(),
		description: z.string().optional(),
		link: z.string().optional(),
		available: z.boolean().default(true),
	}),
});

export const collections = { site, countdown, goals, timeline, goods };
