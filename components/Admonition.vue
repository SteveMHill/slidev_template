<!-- Source: https://github.com/gureckis/slidev-theme-neversink/blob/main/components/Admonition.vue -->

<script setup>
import '../styles/admonition.css';
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
const props = defineProps({
  color: {
    type: String,
    default: 'amber-light',
  },
  title: {
    type: String,
    default: 'Note',
  },
  icon: {
    type: String,
    default: 'mdi-information-variant-circle-outline',
  },
  width: {
    type: String,
    default: '100%',
  },
})

const colorscheme = computed(() => {
  return `custom-${props.color}-scheme`
})
</script>

<template>
  <div class="admonition admonition-custom" :class="colorscheme">
    <p class="admonition-title-custom">
      <span class="font-size-1.3rem"><Icon :icon="props.icon" /></span>&nbsp;&nbsp;{{ props.title }}
    </p>
    <p><slot></slot></p>
  </div>
</template>

