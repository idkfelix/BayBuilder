<script>
  import { page } from '$app/stores'
  import { presets } from '$lib/presets.js'
  import JSONCrush from 'jsoncrush'
	
  export let bayHeight
  export let pieces
  let shareUrl
  let dl

  const saveConfig = () => {
    dl.href = URL.createObjectURL(new Blob([JSON.stringify(pieces)], { type: 'application/json' }))
    dl.download = 'BayConfig.json';
    dl.click()
  }

  const loadConfig = (event) => {
    if (event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const config = JSON.parse(e.target.result)
        pieces = config
      }
      reader.readAsText(event.target.files[0])
    }
  }

  const newShareUrl = () => {
    shareUrl = $page.url.origin +'?'+ new URLSearchParams({
      height: bayHeight,
      conf: JSONCrush.crush(JSON.stringify(pieces))
    })
  }

  newShareUrl()
</script>

<div class="mx-6 w-48 text-center font-bold">
  <!-- Manage -->
	<h3 class="text-2xl mb-2">
		Manage Bay
	</h3>
  <div class="flex w-full bg-black font-medium text-white py-2 px-4 shadow m-1">
    <span class="ml-auto">Bay Height:</span>
    <input class="mr-auto w-12 px-1 ml-2 bg-white text-black rounded-sm" type="number" bind:value={bayHeight}>
  </div>
  <button class="btn w-full !bg-red-600" on:click|preventDefault={()=>{pieces = []}}>
    Clear All Pieces
  </button>

  <!-- Presets -->
  <h3 class="text-2xl my-2">
		Presets
	</h3>
  {#each presets as preset, index}
    <button on:click={()=>{pieces = preset}}
      class="w-full btn !bg-gray-200 !text-black outline"
    >
      Preset {index}
    </button>
  {/each}

  <!-- Share -->
  <h3 class="text-2xl my-2">
		Share Config
	</h3>
  <input type="text" readonly 
    bind:value={shareUrl} 
    on:focus={() => newShareUrl()}
    class="w-full outline py-2 px-4 text-black shadow m-1"
  >
  <!-- Save -->
  <button class="btn w-full"
    on:click={() => saveConfig()}  
  >
    Save Config
    <a class="hidden" bind:this={dl} href="/">Hidden</a>
  </button>
  <!-- Load -->
  <div>
    <button class="btn w-full"
      on:click={() => document.getElementById('upload').click()}
    >
      Load Config
      <input type="file" accept=".json" 
        id="upload" class="hidden"
        on:change={loadConfig}
      >
    </button>
  </div>
</div>