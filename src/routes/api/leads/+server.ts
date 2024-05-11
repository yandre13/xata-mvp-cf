import { db } from '$lib/db/db.server';
import { users } from '$lib/db/schema';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const result = await db.select().from(users);

	return json(result);
};

export const POST = async ({ request }) => {
	const body = await request.json();
	const result = await db.insert(users).values(body).returning();

	return json(result?.[0]);
};
