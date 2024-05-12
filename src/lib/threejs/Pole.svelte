<script>
  import { T } from '@threlte/core'
  import { MeshStandardMaterial } from 'three'

  const metal = new MeshStandardMaterial({
    color: "#222",
    metalness: 0.6,
    roughness: 0.05,
    envMapIntensity: 0.5
  })

  export let x
  export let height
</script>

  <T.Group
    position.y={height/2}
    position.x={x}
  >
    <T.Mesh
      castShadow
    >   
      <T.CylinderGeometry args={[0.07, 0.07, height, 8]} />
      <T is={metal} />
    </T.Mesh>
  </T.Group>