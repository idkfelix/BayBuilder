<script>
  import { page } from '$app/stores'
  import JSONCrush from 'jsoncrush'
  import Piece from '$lib/Piece.svelte'
  import Create from '$lib/Create.svelte'
	import Manage from '$lib/Manage.svelte'
  import Three from '$lib/Three.svelte'
  
  let bayHeight = $page.url.searchParams.get('height') ?? 60
  let pieces = (() => {
    let conf = $page.url.searchParams.get('conf')
    return conf ? JSON.parse(JSONCrush.uncrush(conf)) : []
  })()

  let td = false
</script>

<div class="flex justify-center min-w-full p-8">
  {#if td}
    <Three bind:pieces/>
  {:else}
    <Create bind:pieces/>
    <div>
      <div 
        class="min-w-[240px] outline outline-4 shadow-2xl bay" 
        style="height: {bayHeight * 10}px"
      >
        {#each pieces as p, index}
          <Piece bind:p bind:pieces {index}/>
        {/each}
      </div>
    </div>
  {/if}
  <Manage bind:bayHeight bind:pieces bind:td/>
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