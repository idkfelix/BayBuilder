<script>
	import { draggable } from '@neodrag/svelte';
  import { getContext } from 'svelte';
  import { pieces } from '$lib/stores'

  const { open } = getContext('simple-modal')
  import Search from '$lib/components/Search.svelte'

	export let p
	export let index

  const showModal = () => open(Search,{
    onOkay: (item) => {
      p.img = item.images[0].url
    }
  },{ closeButton: false });

  const remove = () => {pieces.set($pieces.filter((_, i) => i !== index))}
</script>

<div 
	use:draggable={{ 
		grid: [10, 10], 
		bounds: 'parent',
		position: p.pos,
    onDrag: ({ offsetX, offsetY }) => {
      p.pos = { x: offsetX, y: offsetY };
    },
	}}
  class="absolute text-center text-sm text-black flex flex-col {(p.width >= 0.5 && p.img) ? 'p-1' : 'p-0.5'}"
	style="
		height: {p.height * 10}px; 
		width: {p.width * 240}px; 
		background: {p.colour}
  "
>
  <button on:click|preventDefault={() => remove()}>
    <img src="x.svg" class="absolute {(p.width >= 0.5 && p.img) ? "top-2 right-2 w-3" : "top-1 right-1 w-2"}" alt="">
  </button>
  {#if !p.img}
    <!-- if wide display name -->
    {#if p.width >= 0.5}
      <p class="mr-4">{p.name}</p>
    {/if}
    <!-- if not shelf or grid show image btn -->
    {#if p.height > 2 && !p.noBtn}
      {#if p.width >= 0.5}
        <button
          class="p-1 m-2 my-auto bg-white outline"
          on:click={showModal}
        >Select Item</button>
      <!-- Plus button if thin -->
      {:else}
        <button class={(p.width < 0.2) ? "my-auto mr-auto" : "m-auto"} on:click={showModal}>
          <img src="x.svg" class="w-2 rotate-45" alt="">
        </button>
      {/if}
    {/if}
  {:else}
    <img src={p.img} alt="" class="object-cover min-h-full"/>
  {/if}
</div>