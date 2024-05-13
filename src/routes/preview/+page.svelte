<script>
  import { Canvas } from '@threlte/core'
  import { Suspense, CSM, Align } from '@threlte/extras'

  import Renderer from '$lib/web3d/util/Renderer.svelte'
  import Scene from '$lib/web3d/Scene.svelte'
  import Camera from '$lib/web3d/util/Camera.svelte'
</script>

<div class="outline outline-4 relative max-w-[1000px] mx-auto min-h-full shadow-2xl">
  <a href="/" class="absolute m-2 right-2">
    <button class="w-full btn">
      Go Back
    </button>
  </a>
  <Canvas>
    <Renderer />
    <Camera/>
    <Suspense>
      <CSM 
        args={{mode: 'logarithmic'}}
        lightDirection={[1, -1, -1]}
        lightIntensity={10}
      >
        <Align>
          <Scene />
        </Align>
      </CSM>
    </Suspense>
  </Canvas>
</div>