<script> 
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Modal from "svelte-simple-modal";
  const modal = writable(null);
  setContext('modal',modal);
</script>

<svelte:head>
  <link rel="shortcut icon" href="https://cdn.fasttimes.com.au/media/favicon/stores/1/fast-times-icon.ico" type="image/x-icon">
</svelte:head>

<Modal show={$modal}>
  <div class="h-[100dvh] w-full flex flex-col items-center">
    <header class="flex items-center w-full px-8 mx-auto mt-6">
      <div class="w-24"/>
      <a href="/bay" class="flex items-center mx-auto">
        <h1 class="text-3xl font-bold">Bay Builder</h1>
      </a>
      <a href="/" class="max-w-24 text-center btn !bg-white !text-black border-black border-2">
        Home
      </a>
    </header>
    
    <main class="flex-grow w-full max-h-full p-4 sm:p-8">
      <slot/>
    </main>

    <footer class="block w-full px-4 m-4">
        <p>Made with ❤️ by <a href="https://instagram.com/slappyloop">Felix from Eastland</a></p>
    </footer>
  </div>
</Modal>