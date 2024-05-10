<script>
  import { page } from '$app/stores'
  import { presets } from '$lib/presets.js'
  import JSONCrush from 'jsoncrush'
	
  export let td
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

<div class="w-48 mx-6 font-bold text-center">
  <!-- Manage -->
	<h3 class="mb-2 text-2xl">
		Manage Bay
	</h3>
  <div class="flex w-full px-4 py-2 m-1 font-medium text-white bg-black shadow">
    <span class="ml-auto">Bay Height:</span>
    <input class="w-12 px-1 ml-2 mr-auto text-black bg-white rounded-sm" type="number" bind:value={bayHeight}>
  </div>
  <button class="btn w-full !bg-red-600" on:click|preventDefault={()=>{pieces = []}}>
    Clear All Pieces
  </button>
  <button class="btn w-full !bg-teal-600" on:click|preventDefault={()=>{td = !td}}>
    3D Mode (WiP)
  </button>

  <!-- Presets -->
  <h3 class="my-2 text-2xl">
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
  <h3 class="my-2 text-2xl">
		Share Config
	</h3>
  <input type="text" readonly 
    bind:value={shareUrl} 
    on:focus={() => newShareUrl()}
    class="w-full px-4 py-2 m-1 text-black shadow outline"
  >
  <!-- Save -->
  <button class="w-full btn"
    on:click={() => saveConfig()}  
  >
    Save Config
    <a class="hidden" bind:this={dl} href="/">Hidden</a>
  </button>
  <!-- Load -->
  <div>
    <button class="w-full btn"
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