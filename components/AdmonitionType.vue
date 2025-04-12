<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import '../styles/admonition.css'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  width: {
    type: String,
    default: '100%',
  },
})

const admontype = computed(() => {
  switch (props.type) {
    case 'important':
      return {
        title: 'Important',
        class: 'admonition important',
        icon: 'mdi-alert-circle', // Iconify icon
      }
    case 'tip':
      return {
        title: 'Tip',
        class: 'admonition tip',
        icon: 'mdi-lightbulb-on-outline', // Iconify icon
      }
    case 'warning':
      return {
        title: 'Warning',
        class: 'admonition warning',
        icon: 'mdi-alert', // Iconify icon
      }
    case 'caution':
      return {
        title: 'Caution',
        class: 'admonition caution',
        icon: 'mdi-alert-octagon', // Iconify icon
      }
    case 'info':
    default:
      return {
        title: 'Note',
        class: 'admonition info',
        icon: 'mdi-information-outline', // Iconify icon
      }
  }
})
</script>

<template>
  <div :class="admontype.class" :style="{ width: width }">
    <div class="admonition-header">
      <Icon :icon="admontype.icon" class="admonition-icon" />
      <strong>{{ admontype.title }}</strong>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.admonition-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.admonition-icon {
  font-size: 1.5rem;
}
</style>