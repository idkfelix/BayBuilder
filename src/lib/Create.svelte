<script>	
	export let pieces

	let refs = [
    { name: 'Shelf', height: 2, full: false },
    { name: 'Full Shelf', height: 2, full: true },
    { name: 'T-Shirt Bar', height: 18, full: false },
    { name: 'Pants Bar', height: 22, full: false },
    { name: 'Cage Grid', height: 20, full: false },
    { name: 'T-Shirt', height: 16, full: false },
    { name: 'Waterfall Tee', height: 20, full: false },
    { name: 'Hoodie', height: 18, full: false },
    { name: 'Waterfall Hood', height: 22, full: false }
  ]

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


