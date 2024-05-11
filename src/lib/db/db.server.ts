import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { XataClient } from '../../xata'; // Generated client
import * as dotenv from 'dotenv';
dotenv.config();

const client = new XataClient({
	apiKey: process.env.XATA_API_KEY
});
const pool = new pg.Pool({
	connectionString: client.sql.connectionString,
	max: 20
});
export const db = drizzle(pool);
