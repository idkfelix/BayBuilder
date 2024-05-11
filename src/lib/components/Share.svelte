<script>
  import { pieces } from '$lib/stores'

  let shareUrl
  let dl

  const saveConfig = () => {
    dl.href = URL.createObjectURL(new Blob([JSON.stringify($pieces)], { type: 'application/json' }))
    dl.download = 'BayConfig.json';
    dl.click()
  }

  const loadConfig = (event) => {
    if (event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const config = JSON.parse(e.target.result)
        pieces.set(config)
      }
      reader.readAsText(event.target.files[0])
    }
  }
</script>

<h3 class="my-2 text-2xl">
  Share Config
</h3>
<input type="text" readonly 
  bind:value={shareUrl} 
  on:focus={() => {}}
  class="w-full px-4 py-2 m-1 text-black shadow outline"
>

<button class="w-full btn"
  on:click={() => saveConfig()}  
>
  Save Config
  <a class="hidden" bind:this={dl} href="/">Hidden</a>
</button>

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

