<script>
  import { T } from '@threlte/core'
  import { GLTF } from '@threlte/extras';

  export let p

  $: posY = p.coord.y /-10 *0.12
  $: posX = p.coord.x /100
</script>

{#if p.model}
  <GLTF
    position={[posX,posY]}
    url={p.model+'?'+Math.random()}
    scale={2}
    on:load={(gltf)=>{
      gltf.scene.traverse(function(model){
        if(model.isMesh){
          model.castShadow = true
          model.receiveShadow = true
        }
      })
    }}
  />
  <T.Mesh 
    castShadow
    receiveShadow
    position={[0, posY]}
  >
    <T.BoxGeometry args={[2.4, 0.1, 0.05]} />
    <T.MeshStandardMaterial 
      color={"#222"}
      metalness={0.9}
      roughness={0.1}
    />
  </T.Mesh>
{/if}