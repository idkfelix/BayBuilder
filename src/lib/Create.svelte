<script>	
  import {refs} from '$lib/refs.js'
	export let pieces
</script>

<div class="mx-6 w-48 text-center font-bold">
  <h3 class="text-2xl mb-2">
    Create New
  </h3>
  <div class="flex flex-col">
    {#each refs as ref}
      <button
        class="btn"
        on:click={() => 
          pieces = [...pieces, {...ref,
              colour: `hsl(${Math.floor(Math.random() * 360)}, 40%, 70%)`,
              editing: false,
              pos: {x:0, y:0}, 
          }]
        }
      > {ref.name} </button>
    {/each}
  </div>
</div>


