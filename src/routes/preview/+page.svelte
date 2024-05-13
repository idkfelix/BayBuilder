<script>
  import { Canvas, T } from '@threlte/core'
  import { Suspense, CSM, Align } from '@threlte/extras'

  import Renderer from '$lib/web3d/util/Renderer.svelte'
  import Scene from '$lib/web3d/Scene.svelte'
  import Camera from '$lib/web3d/util/Camera.svelte'
</script>

<div class="outline outline-4 relative max-w-[1000px] mx-auto min-h-full shadow-2xl">
  <a href="/" class="right-2 absolute m-2">
    <button class="btn w-full">
      Go Back
    </button>
  </a>
  <Canvas>
    <Renderer />
    <Suspense>
      <CSM 
        enabled={true}
        args={{mode: 'logarithmic'}}
        lightDirection={[1, -1, -1]}
        lightIntensity={5}
      >
        <Camera />
        <Align>
          <Scene />
        </Align>
      </CSM>
    </Suspense>
  </Canvas>
</div>