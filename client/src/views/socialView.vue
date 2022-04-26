<template>
  <div>
    <Navsection />
    <a
      id="popup-button"
      class="button"
      href="#popup1"
      style="visibility: hidden"
      >Let me Pop up</a
    >
    <div class="info">
      <div class="sub-info left">
        <img
          v-for="badge in badgesImages"
          :src="badge.img"
          style="height: 100px; margin: 10px"
        />
      </div>
      <div class="sub-info right" />
    </div>
    <Toggle
      @change="onChange"
      v-for="option in options"
      :value="option.value"
      v-model="option.enabled"
      :onLabel="option.text"
      :offLabel="option.text"
      class="toggle-blue"
    />
    <div class="info">
      <div
        class="sub-info left"
        v-for="(entry, i) in splicedChartData"
        :key="i"
      >
        <SocialBubble :chartData="chartData[i]" :chartOptions="chartOptions" />
      </div>
    </div>
    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>🥳 BADGE ALERT 🥳</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">
          You have been awarded the <b>'Camper Badge'</b> <br /><br />
          Continue staying away from Netlix for another hour to earn it again!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";
import Toggle from "@vueform/toggle";
import SocialBubble from "@/components/SocialBubble.vue";
export default {
  name: "socialView",
  components: {
    SocialBubble,
    Navsection,
    Toggle,
  },
  data() {
    var badgesImages = [
      { badge: "feb", img: require("../assets/feb-month-badge.jpeg") },
      { badge: "march", img: require("../assets/march-month-badge.jpeg") },
      { badge: "april", img: require("../assets/april-month-badge.jpeg") },
      { badge: "camper", img: require("../assets/camper-badge.jpeg") },
    ];
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
                x: 3,
                y: 10,
                r: 10,
              },
              {
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 5,
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
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 2,
                y: 10,
                r: 10,
              },
              {
                x: 3,
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
                x: 3,
                y: 10,
                r: 10,
              },
              {
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 5,
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
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 2,
                y: 10,
                r: 10,
              },
              {
                x: 3,
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
                x: 3,
                y: 10,
                r: 10,
              },
              {
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 5,
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
                x: 3,
                y: 10,
                r: 10,
              },
              {
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 5,
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
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 2,
                y: 10,
                r: 10,
              },
              {
                x: 3,
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
                x: 3,
                y: 10,
                r: 10,
              },
              {
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 5,
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
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 2,
                y: 10,
                r: 10,
              },
              {
                x: 3,
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
                x: 3,
                y: 10,
                r: 10,
              },
              {
                x: 3,
                y: 25,
                r: 25,
              },
              {
                x: 5,
                y: 3,
                r: 3,
              },
            ],
          },
        ],
      },
    ];
    return {
      badgesImages: badgesImages,
      splicedChartData: chartData,
      selected: "All",
      options: [
        {
          text: "Tom",
          value: "Tom",
          enabled: true,
        },
        {
          text: "Bob",
          value: "Bob",
          enabled: true,
        },
        {
          text: "Mom",
          value: "Mom",
          enabled: true,
        },
        {
          text: "Dad",
          value: "Dad",
          enabled: true,
        },
        {
          text: "Happy",
          value: "Happy",
          enabled: true,
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
  mounted() {
    document.getElementById("popup-button").click();
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style lang="scss" scoped>
.info {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
}
.sub-info.left {
  width: 33%;
  display: inline-block;
}
.toggle-blue {
  --toggle-width: 5rem;
  margin: 10px;
}
//============================

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06d85f;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}
</style>
