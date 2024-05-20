<script>
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';
  import { pieces, bayHeight, title } from '$lib/stores'
  import Create from '$lib/components/Create.svelte'

  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal')
</script>

<h3 class="mb-2 text-2xl font-bold text-center">
  Bay Controls
</h3>
<!-- Title -->
<input 
  type="text" bind:value={$title}
  class="w-full px-2 py-1 m-1 mb-2 text-xl font-semibold text-center text-black bg-white border-2 border-black"
>
<!-- 3D Mode -->
<a href="/preview"> 
  <button class="btn w-full !bg-teal-600">
    3D Preview
  </button>
</a>
<!-- Height -->
<div class="flex w-full px-4 py-2 m-1 font-medium text-white bg-black shadow">
  <span class="ml-auto">Bay Height:</span>
  <input class="w-12 px-1 ml-2 mr-auto text-black bg-white rounded-sm" type="number" bind:value={$bayHeight}>
</div>
<!-- Clear -->
<button class="btn w-full !bg-red-600" on:click|preventDefault={()=>{$pieces = []}}>
  Clear All Pieces
</button>

<button
  class="block w-full btn md:hidden"
  on:click={()=> open(Create)}
>
  Create
</button>

<!-- Share Link -->
{#if $page.data.linked}
<input class="btn !bg-white !border-2 border-blue-500 w-full !text-black" 
  disabled type="text"
  value={$page.url}
>
{:else if !$page?.form?.id}
  <form method="POST" use:enhance>
    <input type="hidden" name="title" value={$title}>
    <input type="hidden" name="height" value={$bayHeight}>
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