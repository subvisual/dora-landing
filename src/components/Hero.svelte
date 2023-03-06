<script lang="ts">
  import Button from "./Button.svelte";
</script>

<div class="pt-20 lg:pt-40 pb-6 sm:pb-20">
  <div class="w-min mx-auto flex flex-col gap-6 text-center">
    <div class="flex flex-col gap-12">
      <h1 class="text-white sm:px-6 title">
        <span class="text-yellow selection:text-white">Dora</span>, the <span>TipsetExplorer</span>
      </h1>
      <p class="leading-relaxed sm:leading-loose">
        The Graph-like Event indexer, for the FEVM, where you specify Handlers. Handlers can be by
        Smart Contract or default Handlers for a specific Event.
      </p>
    </div>
    <div class="flex flex-col gap-12">
      <p class="text-lg md:text-xl">
        Winner at
        <a
          class="underline decoration-[0.4px]"
          href="https://ethglobal.com/events/spacewarp/prizes"
          target="_blank"
          rel="noreferrer noopener">FVM Space Warp</a
        >
        <br />
        🛸 Filecoin & IPFS — 🥇 FVM Spaceships category
      </p>
      <div class="flex flex-wrap gap-8 justify-center">
        <Button href="/">See on GitHub</Button>
        <Button href="/">See on ETHGlobal</Button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @media screen and (max-width: 768px) {
    h1.title {
      font-size: 12vw;
    }
  }
</style>
