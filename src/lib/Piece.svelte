<script>
	import { draggable } from '@neodrag/svelte';
  import { getContext } from 'svelte';
  import { bind } from "svelte-simple-modal";
  import Search from '$lib/Search.svelte'

	export let p
	export let index

  const modal = getContext('modal')
  const showModal = () => modal.set(bind(Search));
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
  class="absolute text-center text-sm text-black font-medium flex flex-col"
	style="
		height: {p.height * 10}px; 
		width: {p.full ? 240 : 120}px; 
		background: {p.colour}
  "
>
  <p>{p.name}({index})</p>
  <button
    class="my-auto"
    on:click={showModal}
  >Select Product</button>
</div>