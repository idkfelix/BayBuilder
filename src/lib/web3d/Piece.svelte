<script>
  import { T } from '@threlte/core'
  import { GLTF } from '@threlte/extras';

  export let p

  $: posY = p.coord.y /-10 *0.12
  $: posX = p.coord.x /100
</script>

{#if p.model}
  <GLTF
    castShadow
    receiveShadow
    position={[posX,posY]}
    url={p.model+'?'+Math.random()}
    scale={2}
  />
  <T.Mesh 
    castShadow
    receiveShadow
    position={[0, posY]}
  >
    <T.BoxGeometry args={[2.4, 0.1, 0.05]} />
    <T.MeshStandardMaterial 
      color={"#222"}
      metalness={0.6}
      roughness={0.05}
      envMapIntensity={0.5}
    />
  </T.Mesh>
{/if}