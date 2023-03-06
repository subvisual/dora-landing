<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import FeatureCard from "./FeatureCard.svelte";
  import features from "../data/features";

  let showAll = false;

  function toggleShow() {
    showAll = !showAll;
  }
</script>

<div class="w-11/12 sm:w-4/5 md:w-full mx-auto">
  <div class="hidden md:grid md:grid-cols-2 gap-x-16 gap-y-10">
    {#each features as feature}
      <FeatureCard>{feature}</FeatureCard>
    {/each}
  </div>
  <div class="flex flex-col gap-8 md:hidden">
    {#each features as feature, idx}
      {#if idx < 3 || showAll}
        <FeatureCard>{feature}</FeatureCard>
      {/if}
    {/each}
    <button
      class="w-fit mx-auto p-2"
      on:click={toggleShow}
      type="button">{@html showAll ? "&minus; Show less" : "&plus; Show more"}</button
    >
  </div>
</div>
