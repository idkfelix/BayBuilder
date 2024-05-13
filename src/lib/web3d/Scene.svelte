<script>
  import { T } from '@threlte/core'
  import { Sky } from '@threlte/extras'
  import { pieces, bayHeight } from '$lib/stores.js'

  import Backdrop from '$lib/web3d/Backdrop.svelte';
  import Piece from '$lib/web3d/Piece.svelte';

  $: _bayHeight = $bayHeight * 0.12
</script>

<Sky elevation={3} azimuth={-45}/>

<T.Group position.z={-0.3}>
  <Backdrop/>
</T.Group>

{#each [-1.2,1.2] as x}
  <T.Group position={[x, _bayHeight/2]}>
    <T.Mesh
      castShadow
      receiveShadow
    >   
      <T.CylinderGeometry args={[0.07, 0.07, _bayHeight, 8]} />
      <T.MeshStandardMaterial 
        color={"#222"}
        metalness={0.6}
        roughness={0.05}
        envMapIntensity={0.5}
      />
    </T.Mesh>
  </T.Group>
{/each}

<T.Group position={[0, _bayHeight, 0.05]}>
  {#each $pieces as p}
    <Piece {p}/>
  {/each}
</T.Group>