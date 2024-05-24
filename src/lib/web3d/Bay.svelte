<script>
  import { T } from '@threlte/core'
  import { GLTF, Text } from '@threlte/extras'
  import { pieces, bayHeight, title } from '$lib/stores.js'
  import Piece from '$lib/web3d/Piece.svelte';

  $: _bayHeight = $bayHeight * 0.12
</script>

<GLTF 
  position.z={-0.3}
  url={'/models/scene.glb'}
  on:load={(gltf)=>{
    gltf.scene.traverse((model)=>{
      if(model.isMesh){
        model.receiveShadow = true
      }
    })
  }}
/>

<Text 
  text={$title} 
  scale={4}
  anchorX={'center'}
  anchorY={'bottom'}
  position.y={8.2}
  position.z={-0.3}
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
    <Piece bind:p/>
  {/each}
</T.Group>