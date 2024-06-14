<script>
  import '../app.css'
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
  <slot/>
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