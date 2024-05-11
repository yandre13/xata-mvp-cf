<script>
	let name = '';
	let email = '';
</script>

<div>
	<form
		on:submit|preventDefault={async () => {
			fetch('/api/leads', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email })
			})
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					name = '';
					email = '';
				});
		}}
	>
		<input type="text" placeholder="Name" bind:value={name} />
		<input type="email" placeholder="Email" bind:value={email} />
		<button type="submit">Submit</button>
	</form>
</div>
