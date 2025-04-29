<template>
  <svg ref="container" :style="svgStyle" :width="width" :height="height"></svg>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import rough from 'roughjs'

const props = defineProps({
  x1: { type: Number, required: true }, // Starting x-coordinate
  y1: { type: Number, required: true }, // Starting y-coordinate
  x2: { type: Number, required: true }, // Ending x-coordinate
  y2: { type: Number, required: true }, // Ending y-coordinate
  stroke: { type: String, default: '#000' }, // Stroke color
  strokeWidth: { type: Number, default: 2 }, // Stroke width
  roughness: { type: Number, default: 1 }, // Roughness of the sketchy style
  bowing: { type: Number, default: 1 }, // Bowing of the sketchy lines
  arrowheadSize: { type: Number, default: 10 }, // Size of the arrowhead
})

const container = ref(null)

onMounted(() => {
  // Clear the container
  container.value.innerHTML = ''

  // Create a Rough.js SVG instance
  const roughSvg = rough.svg(container.value)

  // Generate the rough arrow line
  const roughLine = roughSvg.line(props.x1, props.y1, props.x2, props.y2, {
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    roughness: props.roughness,
    bowing: props.bowing,
  })

  // Append the rough line to the container
  container.value.appendChild(roughLine)

  // Add arrowhead
  const angle = Math.atan2(props.y2 - props.y1, props.x2 - props.x1)
  const arrowhead = roughSvg.polygon([
    [props.x2, props.y2],
    [
      props.x2 - props.arrowheadSize * Math.cos(angle - Math.PI / 6),
      props.y2 - props.arrowheadSize * Math.sin(angle - Math.PI / 6),
    ],
    [
      props.x2 - props.arrowheadSize * Math.cos(angle + Math.PI / 6),
      props.y2 - props.arrowheadSize * Math.sin(angle + Math.PI / 6),
    ],
  ], {
    fill: props.stroke,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
  })

  container.value.appendChild(arrowhead)
})

const width = computed(() => Math.abs(props.x2 - props.x1) + props.arrowheadSize * 2)
const height = computed(() => Math.abs(props.y2 - props.y1) + props.arrowheadSize * 2)

const svgStyle = computed(() => ({
  position: 'absolute',
  top: '0px',
  left: '0px',
}))
</script>

<style scoped>
svg {
  pointer-events: none; /* Prevent the arrow from interfering with mouse events */
  overflow: visible; /* Ensure no parts of the arrow are clipped */
}
</style>