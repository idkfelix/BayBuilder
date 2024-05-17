<script>
	import { draggable } from '@neodrag/svelte';
  import { getContext } from 'svelte';
  import { pieces } from '$lib/stores'
  import Search from '$lib/components/Search.svelte'

	export let p
	export let index

  const { open } = getContext('simple-modal')
  
  const showModal = () => open(Search,{
    onOkay: (item) => {
      p.img = item.images[0].url
    }
  },{ closeButton: false });

  const remove = () => {
    $pieces = $pieces.filter((_, i) => i !== index)
  }
</script>

<div 
	use:draggable={{ 
		grid: [10, 10], 
		bounds: 'parent',
		position: p.coord,
    onDrag: ({ offsetX, offsetY }) => {p.coord = { x: offsetX, y: offsetY }},
	}}
  class="absolute flex flex-col p-0.5 overflow-hidden"
	style="
		height: {p.height * 10}px; 
		width: {p.width * 240}px; 
		background: {p.colour}
  "
>
  <!-- Remove Btn -->
  <button on:click|preventDefault={() => remove()}>
    <img src="x.svg" class="absolute w-2.5 top-1.5 right-1.5" alt="">
  </button>
  <!-- Icon -->
  {#if p.icon}
    <img src={p.icon} class="{(p.height > 2) ? "max-h-[25px]" : "h-full"} mb-1 px-4" alt="">
  {:else if p.grid}
    <div 
      class="w-full h-full border-2 border-black" 
      style="background: conic-gradient(from 90deg at 1px 1px,#0000 90deg,black 0) -7px -5px/25px 25px;"
    />
  {/if}
  <!-- Product Select -->
  {#if p.img && p.height > 2}
    <img src={p.img} class="max-h-full m-auto rounded-sm" alt="">
  {:else if p.height > 2 && !p.noBtn && p.width > 0.4}
    <button
      class="p-1 m-2 my-auto text-sm text-center text-black bg-white outline"
      on:click={showModal}
    >Select {p.name}</button>
  {/if}
</div>