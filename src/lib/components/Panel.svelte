<script>
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';
  import { pieces, bayHeight } from '$lib/stores'
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
  class="btn md:hidden block w-full"
  on:click={()=> open(Create)}
>
  Create
</button>

{#if !$page?.form?.id}
  <form method="POST" use:enhance>
    <input type="hidden" name="pieces" value={JSON.stringify($pieces)}>
    <button class="w-full btn !bg-blue-500" type="submit">
      New Share Link
      <a class="hidden" let:this={dl} href="/">Hidden</a>
    </button>
  </form>
{:else}
  <input class="btn !bg-white !border-2 border-blue-500 w-full !text-black" 
    disabled type="text"
    value={$page.url.origin+'/'+$page?.form?.id}
  >
{/if}