<!-- filepath: /Users/stevenhill/Projects/git_tutorial/layouts/split-with-header.vue -->
<template>
  <div class="w-full h-full slidev-layout default">
    <!-- Header Section -->
    <div class="header">
      <slot name="header" />
    </div>
    <!-- Split Columns -->
    <div class="grid grid-cols-2 gap-4">
      <div class="left">
        <slot name="left" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this layout
</script>

<style scoped>
.header {
  padding: 1rem;
  text-align: center;
  font-weight: bold;
}

.left, .right {
  padding: 1rem;
}
</style>