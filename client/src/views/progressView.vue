<template>
  <div>
    <div class="progress">
      <Navsection />
      <Progress />
      <select v-model="selected" @change="onChange()">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
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
    var chartData = {
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
    };
    return {
      selected: "A",
      options: [
        { text: "04/10/22-04/16/22", value: "A" },
        { text: "04/3/22-04/9/22", value: "B" },
        { text: "03/27/22-04/2/22", value: "C" },
      ],
      chartData: chartData,
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
    };
  },
  methods: {
    onChange() {
      console.log("The new value is: ", this.selected);
      if (this.selected == "B") {
        var i = 0;
        this.chartData.datasets[0].data.forEach((element) => {
          i++;
          var randInt = Math.floor(Math.random() * 5);
          this.chartData.datasets[0].data[i] =
            this.chartData.datasets[0].data[i] + randInt;
          this.chartData.datasets[1].data[i] =
            this.chartData.datasets[1].data[i] - randInt;
        });
      } else if (this.selected == "C") {
        var i = 0;
        this.chartData.datasets[0].data.forEach((element) => {
          i++;
          var randInt = Math.floor(Math.random() * 5);
          this.chartData.datasets[0].data[i] =
            this.chartData.datasets[0].data[i] - randInt;
          this.chartData.datasets[1].data[i] =
            this.chartData.datasets[1].data[i] + randInt;
        });
      } else if (this.selected == "A") {
        this.chartData.datasets = [
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
        ];
      }
    },
  },
};
</script>
