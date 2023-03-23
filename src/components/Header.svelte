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
  <div class="flex gap-5 items-center">
    <nav class="hidden gap-2 lg:flex">
      <a href="#solutions">Solutions</a>
      <a href="#features">Features</a>
      <a href="#playground">Playground</a>
      <a href="#mechanism">Mechanism</a>
      <a href="#contact">Contact</a>
    </nav>
    <Button
      header
      href="https://dora-the-tipset-explorer.fly.dev/"
    >
      Go to playground
    </Button>
  </div>
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
