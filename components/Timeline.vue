<template>
  <div class="timeline">
    <div
      v-for="(event, index) in events"
      :key="index"
      class="timeline-item"
    >
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="timeline-title">{{ event.title }}</h3>
        <p class="timeline-date">{{ event.date }}</p>
        <p class="timeline-description">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
.timeline {
  position: relative;
  padding: 1rem 0;
  margin: 1rem 0;
  border-left: 4px solid #007acc;
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.timeline-dot {
  position: absolute;
  top: 0;
  left: -8px;
  width: 16px;
  height: 16px;
  background-color: #007acc;
  border-radius: 50%;
  border: 2px solid white;
}

.timeline-content {
  background-color: #f9f9f9;
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timeline-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.timeline-date {
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: #666;
}

.timeline-description {
  margin: 0;
  font-size: 1rem;
  color: #444;
}
</style>