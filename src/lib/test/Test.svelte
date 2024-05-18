<script>
  import { T } from '@threlte/core'
  import { Sky, Align, OrbitControls, GLTF } from '@threlte/extras'
  import { bayHeight } from '$lib/stores.js'
  import { bays } from '$lib/constants.js'
  import Piece from '$lib/web3d/Piece.svelte';

  import { interactivity } from '@threlte/extras'
  interactivity()

  import { getContext } from 'svelte'
  const { open } = getContext('simple-modal')
  import ConfirmEdit from '$lib/test/ConfirmEdit.svelte';

  $: _bayHeight = $bayHeight * 0.12
</script>

<!-- Camera -->
<T.OrthographicCamera
  makeDefault
  position={[5, 4, 10]}
  zoom={50}
  far={30}
>
  <OrbitControls 
    enableDamping
  />
</T.OrthographicCamera>

<!-- Lights -->
<T.DirectionalLight
  position={[-3, 3, 6]}
  intensity={2}
  castShadow
/>

<T.AmbientLight 
  color={'#ffe6cc'}
  intensity={2.5}
/>

<Sky 
  elevation={10} 
  azimuth={-45}
  rayleigh={0.1}
/>


<Align>
  {@const a = Array(5)}
  <GLTF 
    position={[(a.length-1)*1.2, 0, -0.3]}
    scale.x={a.length/2+0.5}
    url={'/models/scene.glb'}
    on:load={(gltf)=>{
      gltf.scene.traverse((node)=>{
        if(node.isMesh){
          node.receiveShadow = true
          node.material.map.repeat.set(5,25)
          node.material.normalMap.repeat.set(5,25)
          node.material.roughnessMap.repeat.set(5,25)
          node.material.metalnessMap.repeat.set(5,25)
        }
      })
    }}
  />
  {#each bays as _pieces, i}
    <T.Group 
      position.x={2.4*i}
      on:dblclick={(e) => {
        open(ConfirmEdit, {_pieces: _pieces})
      }}
    >
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
        {#each _pieces as p}
          <Piece {p}/>
        {/each}
      </T.Group>
    </T.Group>
  {/each}
</Align>