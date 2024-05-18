<script>
  import { goto } from '$app/navigation';
  import { pieces } from '$lib/stores.js'
  import { getContext } from 'svelte';
  const { close } = getContext('simple-modal');
  export let _pieces
</script>

<div class="flex justify-center w-full">
  <button 
    class="w-full btn max-w-36"
    on:click={()=>{
      pieces.set(_pieces)
      goto('/')
      close()
    }}
  >
    Edit Bay
  </button>
</div>