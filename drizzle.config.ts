import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
	schema: './src/lib/db/schema.ts',
	out: './migrations',
	dialect: 'postgresql',
	breakpoints: true,
	driver: 'pg',
	dbCredentials: {
		url: process.env.DATABASE_URL || ''
	}
} satisfies Config;
