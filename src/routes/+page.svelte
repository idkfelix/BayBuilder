<script>
  import Piece from '$lib/Piece.svelte'
  import Create from '$lib/Create.svelte';
	import Manage from '$lib/Manage.svelte'

	let pieces = []
</script>

<div class="flex justify-center p-8 min-w-full">
  <Create bind:pieces />
  <div class="min-w-[240px] h-[600px] outline outline-4 shadow-2xl bay" >
    {#each pieces as p, index}
      <Piece bind:p {index}/>
    {/each}
  </div>
  <Manage bind:pieces/>
</div>

<style lang="postcss">
  .bay {
    background-image: repeating-linear-gradient(to bottom, gray, gray 2px, #e8e8e8 1px, #e8e8e8 10px);
    background-position: 0 4px;
  }

  :global(.btn) {
    @apply bg-black hover:scale-[1.02] transition-all ease-in-out font-medium text-white py-2 px-4 shadow m-1
  }

  :global(body) {
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    letter-spacing: 0.018em;
  }
</style>