<template>
  <svg
    :width="svgWidth"
    :height="svgHeight"
    :style="svgStyle"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Arrow Line -->
    <line
      :x1="adjustedX1"
      :y1="adjustedY1"
      :x2="adjustedX2"
      :y2="adjustedY2"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
    />
    <!-- Arrowhead -->
    <polygon
      :points="arrowheadPoints"
      :fill="stroke"
    />
  </svg>
</template>

<script>
export default {
  name: "Arrow",
  props: {
    x1: { type: Number, required: true }, // Starting x-coordinate
    y1: { type: Number, required: true }, // Starting y-coordinate
    x2: { type: Number, required: true }, // Ending x-coordinate
    y2: { type: Number, required: true }, // Ending y-coordinate
    stroke: { type: String, default: "black" }, // Arrow stroke color
    strokeWidth: { type: Number, default: 2 }, // Arrow stroke width
    arrowheadSize: { type: Number, default: 10 }, // Size of the arrowhead
  },
  computed: {
    // Calculate the SVG width and height
    svgWidth() {
      return Math.abs(this.x2 - this.x1) + this.arrowheadSize * 2;
    },
    svgHeight() {
      return Math.abs(this.y2 - this.y1) + this.arrowheadSize * 2;
    },
    // Adjust coordinates to fit within the SVG
    adjustedX1() {
      return this.x1 < this.x2 ? this.arrowheadSize : this.svgWidth - this.arrowheadSize;
    },
    adjustedY1() {
      return this.y1 < this.y2 ? this.arrowheadSize : this.svgHeight - this.arrowheadSize;
    },
    adjustedX2() {
      return this.x2 < this.x1 ? this.arrowheadSize : this.svgWidth - this.arrowheadSize;
    },
    adjustedY2() {
      return this.y2 < this.y1 ? this.arrowheadSize : this.svgHeight - this.arrowheadSize;
    },
    // Calculate the arrowhead points
    arrowheadPoints() {
      const angle = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
      const x2 = this.adjustedX2;
      const y2 = this.adjustedY2;
      const size = this.arrowheadSize;
      return [
        [x2, y2],
        [x2 - size * Math.cos(angle - Math.PI / 6), y2 - size * Math.sin(angle - Math.PI / 6)],
        [x2 - size * Math.cos(angle + Math.PI / 6), y2 - size * Math.sin(angle + Math.PI / 6)],
      ]
        .map((point) => point.join(","))
        .join(" ");
    },
    // Style for the SVG container
    svgStyle() {
      return {
        position: "absolute",
        top: `${Math.min(this.y1, this.y2)}px`,
        left: `${Math.min(this.x1, this.x2)}px`,
        overflow: "visible",
      };
    },
  },
};
</script>

<style scoped>
svg {
  pointer-events: none; /* Prevent the arrow from interfering with mouse events */
}
</style>