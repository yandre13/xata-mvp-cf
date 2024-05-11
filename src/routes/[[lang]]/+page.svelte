<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<br />
	<div>
		<nav>
			<ul>
				{#each data.languages as lang}
					{@const lng = lang.code === 'en' ? '' : lang.code}
					<li>
						<a href={`/${lng}`} class:active={lang.code === data.content.language}>{lang.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<br />
	<h1 class="text-7xl font-bold underline">{data.content?.title}</h1>
	<hr />
	<Form />
</section>

<style>
	.active {
		font-weight: bold;
		text-decoration: underline;
	}
</style>
