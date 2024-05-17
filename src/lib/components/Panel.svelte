<script>
  import { pieces, bayHeight } from '$lib/stores'
	import Share from '$lib/components/Share.svelte'
  import Create from '$lib/components/Create.svelte'

  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal')
</script>

<h3 class="mb-2 text-2xl font-bold text-center">
  Controls
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
<button
  class="block w-full btn md:hidden"
  on:click={()=> open(Create)}
>
  Create
</button>

<Share />