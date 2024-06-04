<script>
  import { getContext } from 'svelte'
  import { pieces, bayHeight, title } from '$lib/stores'
  import BayPiece from '$lib/components/BayPiece.svelte'
  import Create from '$lib/components/Create.svelte'
  import Panel from '$lib/components/Panel.svelte'
  const { open } = getContext('simple-modal')

  export let data
  if(data?.config){
    title.set(data.config.title)
    bayHeight.set(data.config.height)
    pieces.set(JSON.parse(data.config.pieces))
  }
</script>

<div class="flex gap-6 max-w-[800px] mx-auto font-bold text-center">
  <div class="hidden w-full md:block max-w-64">
    <Create/>
  </div>
  <div class="mx-auto sm:mr-0 md:mx-0 min-w-[240px]">
    <!-- Editor -->
    <div 
      class="relative grid shadow-2xl justify-items-center outline outline-4 bay"
      style="height: {$bayHeight*10}px;"
    >
      {#each $pieces as p, index}
        <BayPiece bind:p {index}/>
      {/each}
    </div>
    <!-- Mobile Btns -->
    <div class="flex w-full mt-2 sm:hidden">
      <button 
        class="w-full btn"
        on:click={()=> open(Create)}
      >
        Create
      </button>
      <button 
        class="w-full btn"
        on:click={()=> open(Panel)}  
      >
        Controls
      </button>
    </div>
  </div>
  <div class="hidden w-full mr-auto sm:block max-w-64 md:mr-0">
    <Panel/>   
  </div>
</div>

<style lang="postcss">
  .bay {
    background-image: repeating-linear-gradient(to bottom, gray, gray 2px, #e8e8e8 1px, #e8e8e8 10px);
    background-position: 0 4px;
  }
</style>