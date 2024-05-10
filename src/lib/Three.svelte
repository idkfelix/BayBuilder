<script>
  import { Canvas, T } from '@threlte/core'
  import { Suspense, CSM } from '@threlte/extras'
  import Renderer from '$lib/3d/util/Renderer.svelte'
  import Scene from '$lib/3d/Scene.svelte';

  export let pieces
</script>

<div class="w-96 h-[600px] utline outline-4 shadow-2xl">
  <Canvas>
    <!-- Post-Process -->
    <Renderer />
    <Suspense>
      <!-- Cascading Shadows -->
      <CSM 
        args={{mode: 'logarithmic'}}
        lightDirection={[1, -1, -1]}
        lightIntensity={5}
      >
        <!-- Shift scene to center -->
        <T.Group position.y={-3}>
          <Scene bind:pieces />
        </T.Group>
      </CSM>
    </Suspense>
  </Canvas>
</div>