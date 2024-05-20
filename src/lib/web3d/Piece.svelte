<script>
  import { T } from '@threlte/core'
  import { GLTF, useGltf, HTML } from '@threlte/extras';
  import Draggable from '$lib/components/Draggable.svelte'

  export let p
  let showHTML = false

  const hanger = useGltf(p.hanger ?? '/models/hanger.glb')
  $: posY = p.coord.y /-10 *0.12
  $: posX = p.coord.x /100

</script>

{#if p.model}
  <!-- Piece -->
  <GLTF
    position={[posX,posY]}
    url={p.model+'?'+Math.random()}
    scale={2}
    on:click={(e) => {
      e.stopPropagation()
      showHTML = !showHTML
    }}
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

  <!-- Temp Popover -->
  {#if p.height > 2}
    <HTML
      transform
      position={[p.width*-1.2+(posX < 0 ? -1.5:1.5), posY/6]}
      scale={showHTML ? 0.4 : 0}
      zIndexRange={[0,0]}
    >
      <Draggable bind:p noDrag/>
    </HTML>
  {/if}
{/if}