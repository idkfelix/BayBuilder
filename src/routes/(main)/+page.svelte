<script>
  import { pieces, bayHeight } from '$lib/stores'
  import Piece from '$lib/components/Piece.svelte'
  import Create from '$lib/components/Create.svelte'
	import Manage from '$lib/components/Manage.svelte'
</script>

<div class="flex w-full">
  <Create/>
  <div 
    class="min-w-[240px] outline outline-4 shadow-2xl bay" 
    style="height: {$bayHeight * 10}px"
  >
    {#each $pieces as p, index}
      <Piece bind:p {index}/>
    {/each}
  </div>
  <Manage/>
</div>

<style lang="postcss">
  .bay {
    background-image: repeating-linear-gradient(to bottom, gray, gray 2px, #e8e8e8 1px, #e8e8e8 10px);
    background-position: 0 4px;
  }
</style>