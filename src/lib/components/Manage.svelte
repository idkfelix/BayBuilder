<script>
  import { pieces, bayHeight } from '$lib/stores'
  import { presets } from '$lib/data/presets.js'
  import Share from './Share.svelte';
</script>

<div class="w-full mx-6 font-bold text-center">
  <!-- Manage -->
	<h3 class="mb-2 text-2xl">
		Manage Bay
	</h3>
  <div class="flex w-full px-4 py-2 m-1 font-medium text-white bg-black shadow">
    <span class="ml-auto">Bay Height:</span>
    <input class="w-12 px-1 ml-2 mr-auto text-black bg-white rounded-sm" type="number" bind:value={$bayHeight}>
  </div>
  <button class="btn w-full !bg-red-600" on:click|preventDefault={()=>{pieces.set([])}}>
    Clear All Pieces
  </button>
  <a href="/preview">
    <button class="btn w-full !bg-teal-600">
      3D Preview
    </button>
  </a>

  <h3 class="my-2 text-2xl">
		Presets
	</h3>
  {#each presets as preset, index}
    <button on:click={()=>{pieces.set(preset)}}
      class="w-full btn !bg-gray-200 !text-black outline"
    >
      Preset {index}
    </button>
  {/each}

  <Share />
</div>