<script>
  import { Canvas, T } from '@threlte/core'
  import { Suspense, CSM } from '@threlte/extras'
  import Renderer from '$lib/threejs/util/Renderer.svelte'
  import Scene from '$lib/threejs/Scene.svelte';
</script>

<div class="outline outline-4 relative max-w-[1000px] mx-auto min-h-full shadow-2xl">
  <a href="/" class="right-2 absolute m-2">
    <button class="btn w-full">
      Go Back
    </button>
  </a>
  <Canvas>
    <!-- Post-Process -->
    <Renderer />
    <Suspense>
      <!-- Cascading Shadows -->
      <CSM 
        enabled={true}
        args={{mode: 'logarithmic'}}
        lightDirection={[1, -1, -1]}
        lightIntensity={5}
      >
        <!-- Shift scene to center -->
        <T.Group position.y={-3}>
          <Scene />
        </T.Group>
      </CSM>
    </Suspense>
  </Canvas>
</div>