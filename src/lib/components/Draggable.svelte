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
    <img src={p.icon} class="{(p.height > 2) ? "w-full" : "h-full"} mb-0.5" alt="">
  {/if}
  <!-- Product Select -->
  {#if p.img && p.height > 2}
    <div
      style="background-image: url({p.img});"
      class="flex-1 bg-center bg-repeat-x {(p.width > 0.5) ? "bg-contain" : "bg-cover"}"
    />
  {:else if p.height > 2 && !p.noBtn && p.width > 0.4}
    <button
      class="p-1 m-2 my-auto text-sm text-center text-black bg-white outline"
      on:click={showModal}
    >Select Item</button>
  {/if}
</div>