<script>
  import { Canvas } from '@threlte/core'
  import { Suspense } from '@threlte/extras'
  import Renderer from '$lib/web3d/Renderer.svelte'
  import Scene from '$lib/web3d/Scene.svelte'
</script>

<div class="outline outline-3 relative max-w-[1000px] mx-auto min-h-full shadow-2xl">
  <a href="/" class="absolute m-2 right-2">
    <button class="w-full btn">
      Go Back
    </button>
  </a>
  <Canvas>
    <Renderer />
    <Suspense>
      <Scene />
    </Suspense>
  </Canvas>
</div>