<script> 
  import '../app.css'
  import Modal from "svelte-simple-modal";
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  const modal = writable(null);
  setContext('modal',modal);
</script>

<svelte:head>
  <link rel="shortcut icon" href="https://cdn.fasttimes.com.au/media/favicon/stores/1/fast-times-icon.ico" type="image/x-icon">
</svelte:head>

<Modal show={$modal}>
  <div class="h-[100dvh] w-full flex flex-col items-center">
    <!-- Header -->
    <a href="/" class="flex items-center mx-auto mt-6">
      <img 
          class="w-14 mr-4"
          src="https://cdn.fasttimes.com.au/media/mf_webp/png/media/logo/stores/1/fasttimes-logo.webp" 
      alt="">
      <h1 class="text-3xl font-bold">
          Bay Builder
      </h1>
    </a>
    <!-- Page -->
    <main class="flex-grow w-full max-h-full p-8">
      <slot/>
    </main>
    <!-- Footer -->
    <footer class="w-full px-4 m-4">
        <p>Made with ❤️ by <a href="https://instagram.com/slappyloop">Felix from Eastland</a></p>
    </footer>
  </div>
</Modal>

<style lang="postcss">
  :global(.btn) {
    @apply bg-black hover:scale-[1.02] transition-all ease-in-out font-medium text-white py-2 px-4 shadow m-1
  }

  :global(body) {
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    letter-spacing: 0.018em;
  }
</style>