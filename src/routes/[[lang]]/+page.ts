// since there's no dynamic data here, we can prerender

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// it so that it gets served as a static asset in production
export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	const lang = params?.lang || ('en' as string);

	const dataFromApi = {
		languages: [
			{
				code: 'en',
				name: 'English'
			},
			{
				code: 'es',
				name: 'Spanish'
			},
			{
				code: 'fr',
				name: 'French'
			}
		],
		pages: [
			{
				title: 'Hello world',
				language: 'en'
			},
			{
				title: 'Hola mundo',
				language: 'es'
			},
			{
				title: 'Bonjour le monde',
				language: 'fr'
			}
		]
	};

	const content = dataFromApi.pages.find((page) => page.language === lang);

	if (!content) {
		throw error(404, 'Page not found');
	}

	return {
		languages: dataFromApi.languages,
		content
	};
};
