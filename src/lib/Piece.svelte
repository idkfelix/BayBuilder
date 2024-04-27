<script>
	import { draggable } from '@neodrag/svelte';
  import { getContext } from 'svelte';
  import Search from '$lib/Search.svelte'

	export let p
	export let index

  const { open } = getContext('simple-modal')
  const showModal = () => open(Search,{
    onOkay: (item) => {
      p.name = item.name
      p.img = item.images[0].url
    }
  },{ closeButton: false });
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
  class="absolute text-center text-sm text-black font-medium flex flex-col {p.img && 'p-1'}"
	style="
		height: {p.height * 10}px; 
		width: {p.full ? 240 : 120}px; 
		background: {p.colour}
  "
>
  {#if !p.img}
    <p>{p.name} ({index})</p>
    {#if p.height >= 15}
      <button
        class="my-auto m-1 p-1 bg-black text-white rounded-sm"
        on:click={showModal}
      >Select Product</button>
    {/if}
  {:else}
    <img src={p.img} alt="" class="object-cover min-h-full"/>
  {/if}
</div>