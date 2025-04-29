<!-- filepath: /Users/stevenhill/Projects/git_tutorial/layouts/full-width-image.vue -->
<template>
  <div class="w-full h-full slidev-layout default">
    <!-- Full-Width Image -->
    <div class="image" :style="imageStyle"></div>
    <!-- Caption or Content -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

const imageStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: props.backgroundSize,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '70%', // Adjust height as needed
}))
</script>

<style scoped>
.content {
  padding: 1rem;
  text-align: center;
}
</style>