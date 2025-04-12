<template>
  <div class="slidev-layout intro" :style="backgroundStyle">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<script setup>
// Access the backgroundImage from slidev.themeConfigs
const backgroundImage = $slidev.themeConfigs.backgroundImage || ''

// Dynamically set the background style
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}
</script>

<style scoped>
.slidev-layout.intro {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>