<script>
  import { page } from '$app/stores';
  import { presets } from '$lib/presets.js'
	export let bayHeight
  export let pieces

  $: share = $page.url.origin + '?conf=' + btoa(JSON.stringify(pieces))
</script>

<div class="mx-6 w-48 text-center font-bold">
  <!-- Manage -->
	<h3 class="text-2xl mb-2">
		Manage Bay
	</h3>
  <div class="flex w-full bg-black font-medium text-white py-2 px-4 shadow m-1">
    <span class="ml-auto">Bay Height:</span>
    <input class="mr-auto w-12 px-1 ml-2 bg-white text-black rounded-sm" type="number" bind:value={bayHeight}>
  </div>
  <button class="btn w-full !bg-red-600" on:click|preventDefault={()=>{pieces = []}}>
    Clear All Pieces
  </button>

  <!-- Presets -->
  <h3 class="text-2xl my-2">
		Presets
	</h3>
  {#each presets as preset, index}
    <button on:click={()=>{pieces = preset}}
      class="w-full btn !bg-gray-200 !text-black outline"
    >
      Preset {index}
    </button>
  {/each}

  <!-- Config -->
  <h3 class="text-2xl my-2">
		Share Config
	</h3>
  <input type="text" readonly bind:value={share} class="w-full outline py-2 px-4 text-black shadow m-1">
</div>