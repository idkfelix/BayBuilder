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
    <!-- Pole -->
    <T.Mesh
      castShadow
    >   
      <T.CylinderGeometry args={[0.1, 0.1, height, 8]} />
      <T is={metal} />
    </T.Mesh>
    <!-- top -->
    <T.Mesh 
      castShadow
      position.y={height/2}
    > 
      <T.CylinderGeometry args={[0.11, 0.12, 0.1, 8]} />
      <T is={metal} />
    </T.Mesh>
    <!-- Bottom -->
    <T.Mesh 
      castShadow
      position.y={height/-2+0.05}
    > 
      <T.CylinderGeometry args={[0.12, 0.13, 0.2, 8]} />
      <T is={metal} />
    </T.Mesh>
  </T.Group>