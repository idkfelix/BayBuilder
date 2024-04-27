<script>
  import "../app.css"; 
  import Modal from "svelte-simple-modal";
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  const modal = writable(null);
  setContext('modal',modal);
</script>

<Modal show={$modal}>
    <div class="min-h-[100dvh] flex flex-col">
        <header class="mx-auto mt-6 flex items-center">
            <img 
                class="w-14 mr-4"
                src="https://cdn.fasttimes.com.au/media/mf_webp/png/media/logo/stores/1/fasttimes-logo.webp" 
            alt="">
            <h1 class="text-3xl font-bold">
                Bay Builder
            </h1>
        </header>
        <slot/>
        <footer class="mt-auto m-4">
            <p>Made with ❤️ by <a href="https://instagram.com/via.cityloop">Felix from Eastland</a></p>
        </footer>
    </div>
</Modal>