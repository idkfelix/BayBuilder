<script>
  import { T } from '@threlte/core'
  import { useTexture, useSuspense } from '@threlte/extras';
  import { RepeatWrapping } from 'three'
  import { bayHeight } from '$lib/stores.js'
  
  $: _bayHeight = $bayHeight * 0.12
  let width = 5

  const suspend = useSuspense()
  const floorTex = suspend(useTexture({
    map: '/floor/diff.jpg',
    bumpMap: '/floor/disp.png',
    roughnessMap: '/floor/rough.jpg',
    aoMap: '/floor/ao.jpg',
  }, {transform: (t) => {
    t.wrapS = t.wrapT = RepeatWrapping
    t.repeat.set(3, 3)
    t.needsUpdate = true
    return t
  }}))
  const wallTex = suspend(useTexture({
    map: '/wall/diff.jpg',
    bumpMap: '/wall/disp.png',
    roughnessMap: '/wall/rough.jpg',
    aoMap: '/wall/ao.jpg',
  }, {transform: (t) => {
    t.wrapS = t.wrapT = RepeatWrapping
    t.repeat.set(2, 2)
    t.needsUpdate = true
    return t
  }}))
</script>

<!-- Wall -->
<T.Mesh 
  castShadow
  receiveShadow
  position.y={_bayHeight/2}
>
  <T.BoxGeometry args={[width, _bayHeight, 0.1]} />
  <T.MeshStandardMaterial {...$wallTex} />
</T.Mesh>

<!-- skirting -->
<T.Mesh 
  castShadow  
  receiveShadow
  position.z={0.1}
  position.y={0.15}
>
  <T.BoxGeometry args={[width, 0.3, 0.1]} />
  <T.MeshStandardMaterial {...$floorTex} />
</T.Mesh>

<!-- floor -->
<T.Mesh
  castShadow
  receiveShadow
  position.z={1.5-0.05}
  position.y={0.1/-2}
>
  <T.BoxGeometry args={[width, 0.1, 3]} />
  <T.MeshStandardMaterial {...$floorTex} />
</T.Mesh>