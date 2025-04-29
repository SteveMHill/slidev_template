<template>
  <svg
    :width="svgWidth"
    :height="svgHeight"
    :style="svgStyle"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Rectangle -->
    <rect
      :x="strokeWidth / 2"
      :y="strokeWidth / 2"
      :width="width"
      :height="height"
      :fill="color"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      rx="10" 
    />
    <!-- Text -->
    <text
      :x="width / 2"
      :y="height / 2"
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
  name: "Rectangle",
  props: {
    width: { type: Number, required: true }, // Width of the rectangle
    height: { type: Number, required: true }, // Height of the rectangle
    color: { type: String, default: "#3498db" }, // Fill color of the rectangle
    stroke: { type: String, default: "black" }, // Stroke color of the rectangle
    strokeWidth: { type: Number, default: 2 }, // Stroke width of the rectangle
    text: { type: String, default: "" }, // Text inside the rectangle
    textColor: { type: String, default: "black" }, // Color of the text
    fontSize: { type: String, default: "16px" }, // Font size of the text
    fontWeight: { type: String, default: "bold" }, // Font weight of the text
    fontFamily: { type: String, default: "'Arial', sans-serif" }, // Font family of the text
    x: { type: Number, default: 0 }, // X position of the rectangle
    y: { type: Number, default: 0 }, // Y position of the rectangle
  },
  computed: {
    svgWidth() {
      return this.width + this.strokeWidth; // Ensure the SVG width accounts for the stroke
    },
    svgHeight() {
      return this.height + this.strokeWidth; // Ensure the SVG height accounts for the stroke
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
  pointer-events: none; /* Prevent the rectangle from interfering with mouse events */
}
</style>