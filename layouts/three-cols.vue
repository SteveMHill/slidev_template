<!-- filepath: /Users/stevenhill/Projects/git_tutorial/layouts/three-cols.vue -->
<template>
  <div class="grid grid-cols-3 gap-4 w-full h-full slidev-layout default">
    <!-- Left Column -->
    <div class="left">
      <slot name="left" />
    </div>
    <!-- Center Column -->
    <div class="center">
      <slot name="center" />
    </div>
    <!-- Right Column -->
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this layout
</script>

<style scoped>
.left, .center, .right {
  padding: 1rem;
}
</style>