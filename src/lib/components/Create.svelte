<script>	
  import { pieceMenu } from '$lib/constants.js'
  import { pieces } from '$lib/stores'

  let shown = {}
  const toggle = (group) => {
    if(!shown[group]){shown = []}
    shown[group] = !shown[group]
  }

  const add = (group, node) => {
    pieces.set([...$pieces, 
      {
        ...node,
        icon: node.icon ?? group.icon,
        model: node.model ?? group.model,
        colour: `hsl(${Math.floor(Math.random() * 360)}, 40%, 70%)`,
        coord: {x: 0, y: 0},
      }
    ])
  }
</script>

<div class="w-full mx-6 font-bold text-center">
  <h3 class="mb-2 text-2xl">
    Create New
  </h3>
  <div class="flex flex-col overflow-y-scroll scrollbar h-full max-h-[550px]">
    {#each pieceMenu as group (group)}
      <button 
        class="btn"
        on:click={()=> toggle(group.name)}
      >
        {group.name}
      </button>
      <div class="flex flex-col">
        {#if shown[group.name]}
          {#each group.nodes as node (node)}
            <button
              class="!bg-white !text-black !border-2 !border-black btn"
              on:click={()=> add(group, node)}
            > 
              {node.name} 
            </button>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>


