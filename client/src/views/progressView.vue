<template>
  <div>
    <div class="progress">
      <Navsection />
      <Progress />
      <BarChart :chartData="chartData" :chartOptions="chartOptions" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Progress from "@/components/Progress.vue";
import BarChart from "@/components/BarChart.vue";
import Navsection from "@/components/Navsection.vue";

export default {
  name: "progressView",
  components: {
    Progress,
    BarChart,
    Navsection,
  },
  data() {
    return {
      chartData: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Hours Spent",
            backgroundColor: "#2229ab",
            data: [5, 9, 15, 8, 7, 2, 10],
          },
          {
            label: "Hours Left",
            backgroundColor: "#dbc2df",
            data: [19, 15, 9, 16, 17, 22, 14],
          },
        ],
      },
      chartOptions: {
        indexAxis: "y",
        plugins: {
          title: {
            display: true,
            text: "Weekly Overview",
          },
        },
        scales: {
          y: {
            stacked: true,
          },
          x: {
            stacked: true,
            max: 24,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      data2graph: [
        { name: "Monday", hours: 5, hoursleft: 19 },
        { name: "Tuesday", hours: 9, hoursleft: 15 },
        { name: "Wednesday", hours: 15, hoursleft: 9 },
        { name: "Friday", hours: 7, hoursleft: 17 },
        { name: "Saturday", hours: 2, hoursleft: 22 },
        { name: "Sunday", hours: 10, hoursleft: 14 },
      ],
      graphKeys: ["name", "hours"],
    };
  },
};
</script>
