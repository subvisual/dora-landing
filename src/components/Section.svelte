<section class="w-11/12 md:w-4/5 mx-auto pt-10 pb-14 md:py-20 text-center">
  <div {...$$props}>
    <slot />
  </div>
</section>

<style lang="postcss">
  section :global(h2) {
    @apply mb-4 md:mb-8;
  }
</style>
