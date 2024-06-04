<script>
  import { T } from '@threlte/core'
  import { GLTF, useGltf, HTML } from '@threlte/extras';

  export let p

  const hanger = useGltf((p.hanger ?? '/models/hanger.glb')+'?'+Math.random())
  $: posY = p.coord.y /-10 *0.12
  $: posX = p.coord.x /100

</script>

{#if p.model}
  <T.Mesh dispose
    position={[posX,posY]}
  >
    <GLTF
      url={p.model+'?'+Math.random()}
      scale={2}
      on:load={(gltf)=>{
        gltf.scene.traverse(function(node){
          if(node.isMesh){
            node.castShadow = true
            node.receiveShadow = true
          // Convert Emptys to Items
          } else if(!node.geometry && node.type == "Object3D"){
            node.add($hanger.scene.clone())
          }
        })
      }}
    />
  </T.Mesh>
  <!-- Bar -->
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