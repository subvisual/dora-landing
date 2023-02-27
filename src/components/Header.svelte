<script lang="ts">
  import Button from "./Button.svelte";
  import DoraLogo from "./DoraLogo.svelte";
</script>

<header
  class="flex justify-between items-center gap-8 px-8 sm:px-16 xl:px-24 py-4 sm:py-12 lg:border-b border-yellow"
>
  <a
    class="shrink-0 block w-12 sm:w-auto"
    href="/"
  >
    <DoraLogo />
  </a>
  <nav class="hidden gap-2 lg:flex">
    <a href="/">Solutions</a>
    <a href="/">Features</a>
    <a href="/">Mechanism</a>
    <a href="/">Future</a>
    <a href="/">Contact</a>
  </nav>
  <Button
    header
    href="/">Go to playground</Button
  >
</header>

<style>
  nav a {
    padding: 0.5rem;
    background: linear-gradient(to right, #fed766 50%, currentColor 0) 100% / 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.3s;
  }

  nav a:hover {
    background-position: 0 100%;
  }
</style>
