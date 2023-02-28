<script lang="ts">
  import FeatureCard from "./FeatureCard.svelte";
  import features from "../data/features";
</script>

<div class="grid md:grid-cols-2 w-11/12 sm:w-4/5 md:w-full mx-auto gap-x-16 gap-y-8 md:gap-y-10">
  {#each features as feature, idx}
    <FeatureCard>{feature}</FeatureCard>
  {/each}
</div>
