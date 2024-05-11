<script>
  import { pieces, bayHeight } from '$lib/stores.js'
  import { T } from '@threlte/core'
  import { Sky } from '@threlte/extras'

  import Camera from '$lib/threejs/util/Camera.svelte';
  import Backdrop from '$lib/threejs/Backdrop.svelte';
  import Pole from '$lib/threejs/Pole.svelte';
  import Piece from '$lib/threejs/Piece.svelte';

  let height = $bayHeight /10
</script>

<Camera />
<Sky elevation={0.5} azimuth={-45}/>

<Backdrop {height} z={-0.3}/>

{#each [-1.2,1.2] as x}
  <Pole {x} {height}/>
{/each}

<T.Group 
  position.y = {6}
  position.x = {-1.2}
>
  {#each $pieces as P}
    <Piece {P} />
  {/each}
</T.Group>
