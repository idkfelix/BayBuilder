<script>
  import { pieces, bayHeight } from '$lib/stores.js'
  import { T } from '@threlte/core'
  import { Sky, GLTF } from '@threlte/extras'
  import { DEG2RAD } from 'three/src/math/MathUtils';

  import Camera from '$lib/threejs/util/Camera.svelte';
  import Backdrop from '$lib/threejs/Backdrop.svelte';
  import Pole from '$lib/threejs/Pole.svelte';
  import Piece from '$lib/threejs/Piece.svelte';

  let height = $bayHeight *0.12
</script>

<Camera />
<Sky elevation={0.5} azimuth={-45}/>

<Backdrop {height} z={-0.3}/>

{#each [-1.2,1.2] as x}
  <Pole {x} {height}/>
{/each}

<T.Group 
  position.y = {height}
  position.x = {-1.2}
  position.z = {0.05}
>
  {#each $pieces as P, i}
    <Piece {height} {P} {i}/>
  {/each}
</T.Group>