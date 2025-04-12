<template>
  <div class="slidev-layout cover" :style="backgroundStyle">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<script setup>
// Access the author from $slidev.themeConfigs
const author = $slidev.themeConfigs.author || ''

// Access the themeConfig from $slidev
const coverBackground = $slidev.themeConfigs.coverBackground || ''

// Dynamically set the background style
const backgroundStyle = {
  backgroundImage: `url(${coverBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}
</script>

<style lang="postcss">

.custom-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  background-color: transparent; /* Transparent background */
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer-left {
  margin-left: 20px;
}

.footer-right {
  margin-right: 20px;
}

.slidev-layout.cover {
  @apply font-serif grid;

  h1 {
    @apply text-5xl leading-20;
  }

  h1 + p {
    @apply text-2xl -mt-9;
  }
}

</style>