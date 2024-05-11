import { drizzle } from 'drizzle-orm/xata-http';
import { XataClient } from '../../xata'; // Generated client

const client = new XataClient({
	apiKey: 'xau_Da2px865BEZSLNYo6kcCb74My3DDCCic',
	branch: 'main'
});

export const db = drizzle(client);
