<script>
  import { T } from '@threlte/core'
  import { Sky } from '@threlte/extras'

  import Camera from '$lib/3d/util/Camera.svelte';
  import Backdrop from '$lib/3d/Backdrop.svelte';
  import Pole from '$lib/3d/Pole.svelte';
  import Piece from '$lib/3d/Piece.svelte';

  let height = 6
  export let pieces
</script>

<Camera />
<Sky elevation={0.5} azimuth={-45}/>

<!-- Objects -->

<Backdrop {height} z={-0.3}/>

{#each [-1.2,1.2] as x}
  <Pole {x} {height}/>
{/each}

<T.Group 
  position.y = {6}
  position.x = {-1.2}
>
  {#each pieces as P}
    <Piece {P} />
  {/each}
</T.Group>
