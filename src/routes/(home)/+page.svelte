<script>
  import ExtModal from '$lib/components/ExtModal.svelte'
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal')
</script>

<svelte:head>
  <title>FT Tools | Home</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
  <div class="flex flex-col w-full p-5 border-2 border-black shadow-2xl max-w-96">
    <div class="flex gap-4 mx-auto mb-4">
      <img class="w-14" alt="" src="https://cdn.fasttimes.com.au/media/mf_webp/png/media/logo/stores/1/fasttimes-logo.webp">
      <h1 class="my-auto text-4xl font-bold text-center">
        Tools
      </h1>
    </div>
    <a href="/bay" class="w-full text-center btn">
      Bay Builder
    </a>
    <a href="/store" class="w-full text-center btn">
      Store Builder
    </a>
    <button class="w-full text-center btn" on:click={() => open(ExtModal)}>
      Product Search
    </button>
  </div>
  <p class="mt-3 text-sm text-center max-w-80"><span class="font-bold">Disclaimer:</span> FT Tools is still in development and is not yet officially supported or distributed.</p>
</div>