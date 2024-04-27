<script>
	export let pieces
	const remove = (index) => {
    pieces = pieces.filter((_, i) => i !== index);
	}
</script>

<div class="mx-6 w-48 text-center font-bold">
	<h3 class="text-2xl mb-2">
		Delete Pieces
	</h3>
	<div class="flex flex-col">
    <button on:click|preventDefault={() => {pieces = []}}
      class="btn !bg-red-600"  
    >
		Clear All Pieces
	</button>
		{#each pieces as p, index}
			<button on:click|preventDefault={() => remove(index)}
				class="btn !bg-red-900"
			>
				{p.name} {#if !p.img} ({index}) {/if}
			</button>
		{/each}
	</div>
</div>