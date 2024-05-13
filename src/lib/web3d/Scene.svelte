<script>
  import { T } from '@threlte/core'
  import { Sky, GLTF } from '@threlte/extras'
  import { pieces, bayHeight } from '$lib/stores.js'
  
  import Piece from '$lib/web3d/Piece.svelte';

  $: _bayHeight = $bayHeight * 0.12
</script>

<Sky elevation={2} azimuth={-45}/>

<GLTF 
  position.z={-0.3}
  url={'/scene.glb'}
  on:load={(gltf)=>{
    gltf.scene.traverse(function(model){
      if(model.isMesh){
        model.castShadow = true
        model.receiveShadow = true
      }
    })
  }}
/>

{#each [-1.2,1.2] as x}
  {@const poleHeight = (_bayHeight + 0.3)}
  <T.Mesh
    castShadow
    receiveShadow
    position={[x, poleHeight/2]}
  >   
    <T.CylinderGeometry args={[0.07, 0.07, poleHeight, 10]} />
    <T.MeshStandardMaterial 
      color={"#222"}
      metalness={0.9}
      roughness={0.1}
    />
  </T.Mesh>
{/each}

<T.Group position={[0, _bayHeight, 0.05]}>
  {#each $pieces as p}
    <Piece {p}/>
  {/each}
</T.Group>