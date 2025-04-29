<template>
  <svg
    :width="svgSize"
    :height="svgSize"
    :style="svgStyle"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Circle -->
    <circle
      :cx="svgSize / 2"
      :cy="svgSize / 2"
      :r="radius"
      :fill="color"
      :stroke="stroke"
      :stroke-width="strokeWidth"
    />
    <!-- Text -->
    <text
      :x="svgSize / 2"
      :y="svgSize / 2"
      text-anchor="middle"
      dominant-baseline="middle"
      :fill="textColor"
      :font-size="fontSize"
      :font-weight="fontWeight"
      :font-family="fontFamily"
    >
      {{ text }}
    </text>
  </svg>
</template>

<script>
export default {
  name: "Circle",
  props: {
    size: { type: Number, required: true }, // Diameter of the circle
    color: { type: String, default: "#3498db" }, // Fill color of the circle
    stroke: { type: String, default: "black" }, // Stroke color of the circle
    strokeWidth: { type: Number, default: 2 }, // Stroke width of the circle
    text: { type: String, default: "" }, // Text inside the circle
    textColor: { type: String, default: "black" }, // Color of the text
    fontSize: { type: String, default: "16px" }, // Font size of the text
    fontWeight: { type: String, default: "bold" }, // Font weight of the text
    fontFamily: { type: String, default: "'Arial', sans-serif" }, // Font family of the text
    x: { type: Number, default: 0 }, // X position of the circle
    y: { type: Number, default: 0 }, // Y position of the circle
  },
  computed: {
    svgSize() {
      return this.size + this.strokeWidth * 2; // Ensure the SVG size accounts for the stroke
    },
    radius() {
      return this.size / 2; // Radius of the circle
    },
    svgStyle() {
      return {
        position: "absolute",
        top: `${this.y}px`,
        left: `${this.x}px`,
        overflow: "visible",
      };
    },
  },
};
</script>

<style scoped>
svg {
  pointer-events: none; /* Prevent the circle from interfering with mouse events */
}
</style>