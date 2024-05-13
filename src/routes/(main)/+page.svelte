<script>
  import { pieces, bayHeight } from '$lib/stores'
  import Draggable from '$lib/components/Draggable.svelte'
  import Create from '$lib/components/Create.svelte'
	import Share from '$lib/components/Share.svelte'
</script>

<div class="flex w-[800px] mx-auto">
  <Create/>
  
  <div class="min-w-[240px] min-h-[{$bayHeight * 10}px] outline outline-4 shadow-2xl bay grid justify-items-center" >
    {#each $pieces as p, index}
      <Draggable bind:p {index}/>
    {/each}
  </div>
  
  <div class="w-full mx-6 font-bold text-center">
    <h3 class="mb-2 text-2xl">
      Manage Bay
    </h3>
    <div class="flex w-full px-4 py-2 m-1 font-medium text-white bg-black shadow">
      <span class="ml-auto">Bay Height:</span>
      <input class="w-12 px-1 ml-2 mr-auto text-black bg-white rounded-sm" type="number" bind:value={$bayHeight}>
    </div>
    <button class="btn w-full !bg-red-600" on:click|preventDefault={()=>{$pieces = []}}>
      Clear All Pieces
    </button>
    <a href="/preview"> 
      <button class="btn w-full !bg-teal-600">
        3D Preview
      </button>
    </a>
    <Share />
  </div>
</div>

<style lang="postcss">
  .bay {
    background-image: repeating-linear-gradient(to bottom, gray, gray 2px, #e8e8e8 1px, #e8e8e8 10px);
    background-position: 0 4px;
  }
</style>