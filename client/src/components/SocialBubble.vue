<template>
  <div><Bubble /></div>
</template>

<script>
import { defineComponent, h, PropType } from "vue";
import { Bubble } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  PluginOptionsByType,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);
export default defineComponent({
  name: "BubbleChart",
  components: {
    Bubble,
  },
  props: {
    chartData: {
      type: Object,
      default: {
        datasets: [
          {
            label: "Saketh",
            backgroundColor: "#f87979",
            data: [
              {
                x: 20,
                y: 25,
                r: 25,
              },
              {
                x: 40,
                y: 10,
                r: 10,
              },
              {
                x: 30,
                y: 22,
                r: 22,
              },
            ],
          },
          {
            label: "Tom",
            backgroundColor: "#7C8CF8",
            data: [
              {
                x: 10,
                y: 15,
                r: 15,
              },
              {
                x: 20,
                y: 10,
                r: 10,
              },
              {
                x: 15,
                y: 30,
                r: 30,
              },
            ],
          },
        ],
      },
    },
    chartOptions: {
      type: Object,
      default: {
        responsive: true,
        maintainAspectRatio: false,
      },
    },
    chartId: {
      type: String,
      default: "bubble-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "social",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return () =>
      h(Bubble, {
        chartData: props.chartData,
        chartOptions: props.chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      });
  },
});
</script>

<style lang="scss" scoped>
.social {
  margin-top: 50px;
}
</style>
