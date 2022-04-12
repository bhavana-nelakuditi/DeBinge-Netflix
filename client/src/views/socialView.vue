<template>
  <div>
    <Navsection />
    <div class="info">
      <div class="sub-info left">
        <SocialBubble :chartData="chartData" :chartOptions="chartOptions" />
      </div>
      <div class="sub-info right">
        <SocialBubble :chartData="chartData1" :chartOptions="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";
import SocialBubble from "@/components/SocialBubble.vue";
export default {
  name: "socialView",
  components: {
    SocialBubble,
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
          label: "Saketh",
          backgroundColor: "#f87979",
          data: [
            {
              x: 0,
              y: 25,
              r: 25,
            },
            {
              x: 1,
              y: 10,
              r: 10,
            },
            {
              x: 2,
              y: 22,
              r: 22,
            },
            {
              x: 3,
              y: 17,
              r: 17,
            },
            {
              x: 4,
              y: 22,
              r: 22,
            },
            {
              x: 5,
              y: 15,
              r: 15,
            },
            {
              x: 6,
              y: 4,
              r: 4,
            },
          ],
        },
        {
          label: "Tom",
          backgroundColor: "#7C8CF8",
          data: [
            {
              x: 0,
              y: 15,
              r: 15,
            },
            {
              x: 1,
              y: 11,
              r: 11,
            },
            {
              x: 2,
              y: 27,
              r: 27,
            },
            {
              x: 3,
              y: 6,
              r: 6,
            },
            {
              x: 4,
              y: 14,
              r: 14,
            },
            {
              x: 5,
              y: 9,
              r: 9,
            },
            {
              x: 6,
              y: 12,
              r: 12,
            },
          ],
        },
      ],
    };
    var chartData1 = {
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
              y: 10,
              r: 10,
            },
            {
              x: 20,
              y: 25,
              r: 25,
            },
            {
              x: 15,
              y: 3,
              r: 3,
            },
          ],
        },
      ],
    };
    return {
      chartData: chartData,
      chartData1: chartData1,
      chartOptions: {
        plugins: {
          title: {
            display: true,
            text: "Social Comparison",
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                return index % 1 === 0 ? chartData.labels[index] : "";
              },
              color: "red",
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
  display: flex;
}
.sub-info.left {
  width: 50%;
  display: inline-block;
}
.sub-info.right {
  width: 50%;
  display: inline-block;
  min-height: 100% !important;
}
</style>
