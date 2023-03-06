<script lang="ts">
  export let href: string;
  export let header = false;
</script>

<a
  {...$$props}
  {href}
  class:header
>
  <slot />
</a>

<style lang="postcss">
  a {
    @apply flex items-center whitespace-nowrap rounded-2xl bg-yellow py-3 px-6 tracking-tight text-black outline-black;
  }

  a:hover {
    @apply brightness-105;
  }

  a.header {
    @apply py-2 px-5 sm:py-3 sm:px-6;
  }
</style>
