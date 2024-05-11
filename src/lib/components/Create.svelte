<script>	
  import { refs } from '$lib/data/refs.js'
  import { pieces } from '$lib/stores'
</script>

<div class="w-full mx-6 font-bold text-center">
  <h3 class="mb-2 text-2xl">
    Create New
  </h3>
  <div class="flex flex-col overflow-y-scroll max-h-[550px]">
    {#each refs as ref}
      <button
        class="btn"
        on:click={() => 
          pieces.set([...$pieces, {...ref,
              colour: `hsl(${Math.floor(Math.random() * 360)}, 40%, 70%)`,
              pos: {x:0, y:0}, 
          }])
        }
      > {ref.name} </button>
    {/each}
  </div>
</div>


