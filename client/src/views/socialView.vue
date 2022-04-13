<template>
  <div>
    <Navsection />
    <select v-model="selected" @change="onChange()" id="shows">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div class="info">
      <div
        class="sub-info left"
        v-for="(entry, i) in splicedChartData"
        :key="i"
      >
        <SocialBubble :chartData="chartData[i]" :chartOptions="chartOptions" />
      </div>
    </div>
    <!-- <div class="info">
      <div class="sub-info left">
        <SocialBubble :chartData="chartData3" :chartOptions="chartOptions3" />
      </div>
      <div class="sub-info right">
        <SocialBubble :chartData="chartData4" :chartOptions="chartOptions4" />
      </div>
      <div class="sub-info left">
        <SocialBubble :chartData="chartData5" :chartOptions="chartOptions5" />
      </div>
    </div> -->
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
    var splicedChartData = [];
    var chartData = [
      {
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
          {
            label: "Bob",
            backgroundColor: "#2c3e50",
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
      },
      {
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
      },
      {
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
            label: "Bob",
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
      },
      {
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
            label: "Dad",
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
          {
            label: "Mom",
            backgroundColor: "#2c3e50",
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
      },
      {
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
            label: "Dad",
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
      },
      {
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
            label: "Mom",
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
      },
    ];
    return {
      splicedChartData: chartData,
      selected: "All",
      options: [
        {
          text: "All",
          value: "All",
        },
        {
          text: "Friends",
          value: "Friends",
        },
        {
          text: "Family",
          value: "Family",
        },
      ],
      chartData: chartData,
      chartOptions: {
        plugins: {
          title: {
            display: true,
            text: "Overall Comparison",
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                return index % 1 === 0 ? chartData[0].labels[index] : "";
              },
              color: "red",
            },
          },
        },
      },
      chartOptions1: {
        plugins: {
          title: {
            display: true,
            text: "Kota Factory",
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                return index % 1 === 0 ? chartData[0].labels[index] : "";
              },
              color: "red",
            },
          },
        },
      },
      chartOptions2: {
        plugins: {
          title: {
            display: true,
            text: "HIMYM",
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                return index % 1 === 0 ? chartData[0].labels[index] : "";
              },
              color: "red",
            },
          },
        },
      },
      chartOptions3: {
        plugins: {
          title: {
            display: true,
            text: "Overall Comparison",
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                return index % 1 === 0 ? chartData[0].labels[index] : "";
              },
              color: "red",
            },
          },
        },
      },
      chartOptions4: {
        plugins: {
          title: {
            display: true,
            text: "Crown",
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                return index % 1 === 0 ? chartData[0].labels[index] : "";
              },
              color: "red",
            },
          },
        },
      },
      chartOptions5: {
        plugins: {
          title: {
            display: true,
            text: "You",
          },
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                return index % 1 === 0 ? chartData[0].labels[index] : "";
              },
              color: "red",
            },
          },
        },
      },
    };
  },
  methods: {
    onChange() {
      var i = 0;
      this.splicedChartData = [];
      this.chartData.forEach((element) => {
        console.log(element);
        if (this.selected == "Friends" && i < 3) {
          console.log("in if: " + element);
          this.splicedChartData.push(element);
        } else if (this.selected == "Family" && i > 2) {
          console.log("in if: " + element);
          this.splicedChartData.push(element);
        } else if (this.selected == "All") {
          console.log("in if: " + element);
          this.splicedChartData.push(element);
        }
        i++;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
  // display: flex;
}
.sub-info.left {
  width: 33%;
  display: inline-block;
}
.sub-info.right {
  width: 33%;
  display: inline-block;
  min-height: 100% !important;
}
</style>
