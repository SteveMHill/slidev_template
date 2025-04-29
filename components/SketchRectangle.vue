<template>
  <svg
    ref="container"
    :style="svgStyle"
    :width="width + strokeWidth * 2"
    :height="height + strokeWidth * 2"
  ></svg>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import rough from 'roughjs'

const props = defineProps({
  width: { type: Number, required: true }, // Width of the rectangle
  height: { type: Number, required: true }, // Height of the rectangle
  color: { type: String, default: '#3498db' }, // Fill color
  fillStyle: { type: String, default: 'hachure' }, // Fill style (e.g., hachure, solid, zigzag)
  text: { type: String, default: '' }, // Text inside the rectangle
  textColor: { type: String, default: '#000' }, // Text color
  fontSize: { type: String, default: '14px' }, // Font size for the text
  stroke: { type: String, default: '#000' }, // Stroke color
  strokeWidth: { type: Number, default: 2 }, // Stroke width
  roughness: { type: Number, default: 1 }, // Roughness of the sketchy style
  bowing: { type: Number, default: 1 }, // Bowing of the sketchy lines
  x: { type: Number, default: 0 }, // X position of the rectangle
  y: { type: Number, default: 0 }, // Y position of the rectangle
})

const container = ref(null)

onMounted(() => {
  // Clear the container
  container.value.innerHTML = ''

  // Create a Rough.js SVG instance
  const roughSvg = rough.svg(container.value)

  // Generate the rough rectangle
  const roughRect = roughSvg.rectangle(
    props.strokeWidth, // X position (with padding for stroke)
    props.strokeWidth, // Y position (with padding for stroke)
    props.width, // Width
    props.height, // Height
    {
      fill: props.color,
      fillStyle: props.fillStyle, // Use the fillStyle prop
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      roughness: props.roughness,
      bowing: props.bowing,
    }
  )

  // Append the rough rectangle to the container
  container.value.appendChild(roughRect)

  // Add text if provided
  if (props.text) {
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    textElement.setAttribute('x', props.width / 2 + props.strokeWidth)
    textElement.setAttribute('y', props.height / 2 + props.strokeWidth)
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
  pointer-events: none; /* Prevent the rectangle from interfering with mouse events */
  overflow: visible; /* Ensure no parts of the rectangle are clipped */
}
</style>