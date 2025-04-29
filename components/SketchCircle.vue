<template>
  <svg
    ref="container"
    :style="svgStyle"
    :width="size + strokeWidth * 2"
    :height="size + strokeWidth * 2"
  ></svg>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import rough from 'roughjs'

const props = defineProps({
  size: { type: Number, required: true }, // Diameter of the circle
  color: { type: String, default: '#3498db' }, // Fill color
  fillStyle: { type: String, default: 'hachure' }, // Fill style (e.g., hachure, solid, zigzag)
  text: { type: String, default: '' }, // Text inside the circle
  textColor: { type: String, default: '#000' }, // Text color
  fontSize: { type: String, default: '14px' }, // Font size for the text
  stroke: { type: String, default: '#000' }, // Stroke color
  strokeWidth: { type: Number, default: 2 }, // Stroke width
  roughness: { type: Number, default: 1 }, // Roughness of the sketchy style
  bowing: { type: Number, default: 1 }, // Bowing of the sketchy lines
  x: { type: Number, default: 0 }, // X position of the circle
  y: { type: Number, default: 0 }, // Y position of the circle
})

const container = ref(null)

onMounted(() => {
  // Clear the container
  container.value.innerHTML = ''

  // Create a Rough.js SVG instance
  const roughSvg = rough.svg(container.value)

  // Generate the rough circle
  const roughCircle = roughSvg.circle(
    props.size / 2 + props.strokeWidth, // X position (center with padding)
    props.size / 2 + props.strokeWidth, // Y position (center with padding)
    props.size, // Diameter
    {
      fill: props.color,
      fillStyle: props.fillStyle, // Use the fillStyle prop
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      roughness: props.roughness,
      bowing: props.bowing,
    }
  )

  // Append the rough circle to the container
  container.value.appendChild(roughCircle)

  // Add text if provided
  if (props.text) {
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    textElement.setAttribute('x', props.size / 2 + props.strokeWidth)
    textElement.setAttribute('y', props.size / 2 + props.strokeWidth)
    textElement.setAttribute('text-anchor', 'middle')
    textElement.setAttribute('dominant-baseline', 'middle')
    textElement.setAttribute('fill', props.textColor)
    textElement.setAttribute('font-size', props.fontSize)
    textElement.textContent = props.text

    container.value.appendChild(textElement)
  }
})

const svgStyle = computed(() => ({
  position: 'absolute',
  top: `${props.y}px`,
  left: `${props.x}px`,
}))
</script>

<style scoped>
svg {
  pointer-events: none; /* Prevent the circle from interfering with mouse events */
  overflow: visible; /* Ensure no parts of the circle are clipped */
}
</style>