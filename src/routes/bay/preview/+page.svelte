<script>
  import { Canvas } from '@threlte/core'
  import { Suspense, useProgress } from '@threlte/extras'
  import { fade } from 'svelte/transition'
  
  import Renderer from '$lib/web3d/Renderer.svelte'
  import Scene from '$lib/web3d/Scene.svelte'
  
  const { progress } = useProgress()
</script>

<div class="outline outline-3 relative max-w-[1000px] mx-auto min-h-full shadow-2xl">
  {#if $progress < 1}
    <div 
      class="absolute flex flex-col items-center justify-center w-full h-full bg-white"
      transition:fade|local={{
        duration: 250
      }}
    >
      <p class="text-2xl font-semibold">Loading...</p>
    </div>
  {/if}

  <a href="/bay" class="absolute m-2 right-2">
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