<script>
  import { T } from '@threlte/core'
  import { Sky } from '@threlte/extras'
  import { pieces, bayHeight } from '$lib/stores.js'

  import Camera from '$lib/threejs/util/Camera.svelte';
  import Backdrop from '$lib/threejs/Backdrop.svelte';
  import Pole from '$lib/threejs/Pole.svelte';
  import Piece from '$lib/threejs/Piece.svelte';

  let height = $bayHeight *0.12
</script>

<Camera />
<Sky elevation={3} azimuth={-45}/>

<Backdrop {height} z={-0.3}/>

{#each [-1.2,1.2] as x}
  <Pole {x} {height}/>
{/each}

<T.Group position={[0, height, 0.05]}>
  {#each $pieces as P, i}
    <Piece {height} {P} {i}/>
  {/each}
</T.Group>