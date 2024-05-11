<script>
  import { T } from '@threlte/core'
  export let P

  $: width = P.width * 2.4
  $: height = P.height / 10
  $: posY = P.pos.y / -100 - height / 2
  $: posX = P.pos.x / 100 + width / 2
</script>

<T.Mesh 
  castShadow
  receiveShadow
  position.z={(width < 0.5) ? 0.1 : 0}
  position.y={posY}
  position.x={posX}
>
  <T.BoxGeometry args={[width, height, 0.1]} />
  <T.MeshStandardMaterial color={P.colour} />
</T.Mesh>