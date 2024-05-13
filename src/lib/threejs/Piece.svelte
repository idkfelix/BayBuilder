<script>
  import { T } from '@threlte/core'
  import { GLTF } from '@threlte/extras';

  export let P
  export let i

  $: height = P.height *0.12
  $: width = P.width *2.4
  $: posY = P.coord.y /-10 *0.12
  $: posX = P.coord.x / 100
</script>

{#if P.model}
  <GLTF
    castShadow
    receiveShadow
    position={[posX,posY]}
    url={P.model+'?'+i}
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
{:else}
  <T.Mesh 
    castShadow
    receiveShadow
    position.z={(width < 0.5) ? 0.1 : 0}
    position.y={posY - height /2}
    position.x={posX}
  >
    <T.BoxGeometry args={[width, height, 0.1]} />
    <T.MeshStandardMaterial color={P.colour} />
  </T.Mesh>
{/if}