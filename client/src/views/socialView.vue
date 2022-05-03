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
    <!-- <div class="info">
      <div class="sub-info left">
        <img
          v-for="badge in badgesImages"
          :src="badge.img"
          style="height: 100px; margin: 10px"
        />
      </div>
      <div class="sub-info right" />
    </div> -->
    <Toggle
      v-for="option in options"
      :value="option.value"
      v-model="option.enabled"
      :onLabel="option.text"
      :offLabel="option.text"
      :class="option.color"
    />
    <div class="info">
      <div
        class="sub-info bottomleft"
        v-for="(entry, i) in splicedChartData"
        :key="i"
      >
        <div class="screen">
          <img :src="entry.img" style="height: 15%; width: 15%" />
          <svg class="ActivityRings" viewBox="0 0 37 37">
            <g
              class="ring ring1"
              style="transform: scale(1) rotate(-90deg)"
              v-if="this.options[0].enabled"
            >
              <circle
                stroke-width="3"
                r="15.915"
                cx="50%"
                cy="50%"
                class="background"
              />
              <circle
                stroke-width="3"
                r="15.915"
                cx="50%"
                cy="50%"
                class="completed"
                :stroke-dasharray="entry.dasharray1"
              />
            </g>
            <g
              class="ring ring2"
              style="transform: scale(0.75) rotate(-90deg)"
              v-if="this.options[1].enabled"
            >
              <circle
                stroke-width="4"
                r="15.915"
                cx="50%"
                cy="50%"
                class="background"
              />
              <circle
                stroke-width="4"
                r="15.915"
                cx="50%"
                cy="50%"
                class="completed"
                :stroke-dasharray="entry.dasharray2"
              />
            </g>
            <g
              class="ring ring3"
              style="transform: scale(0.5) rotate(-90deg)"
              v-if="this.options[2].enabled"
            >
              <circle
                stroke-width="6"
                r="15.915"
                cx="50%"
                cy="50%"
                class="background"
              />
              <circle
                stroke-width="6"
                r="15.915"
                cx="50%"
                cy="50%"
                class="completed"
                :stroke-dasharray="entry.dasharray3"
              />
            </g>
          </svg>
        </div>
      </div>
      <div class="sub-info bottomright" />
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
    var splicedChartData = [
      {
        dasharray1: Math.floor(Math.random() * 100) + ",100",
        dasharray2: Math.floor(Math.random() * 100) + ",100",
        dasharray3: Math.floor(Math.random() * 100) + ",100",
        img: require("../assets/feb-month-badge.jpeg"),
      },
      {
        dasharray1: Math.floor(Math.random() * 100) + ",100",
        dasharray2: Math.floor(Math.random() * 100) + ",100",
        dasharray3: Math.floor(Math.random() * 100) + ",100",
        img: require("../assets/march-month-badge.jpeg"),
      },
      {
        dasharray1: Math.floor(Math.random() * 100) + ",100",
        dasharray2: Math.floor(Math.random() * 100) + ",100",
        dasharray3: Math.floor(Math.random() * 100) + ",100",
        img: require("../assets/april-month-badge.jpeg"),
      },
      {
        dasharray1: 100,
        dasharray2: Math.floor(Math.random() * 100) + ",100",
        dasharray3: Math.floor(Math.random() * 100) + ",100",
        img: require("../assets/camper-badge.jpeg"),
      },
      // { dasharray1: 25, dasharray2: 25, dasharray3: 25 },
      // { dasharray1: 25, dasharray2: 25, dasharray3: 25 },
    ];
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
      splicedChartData: splicedChartData,
      selected: "All",
      options: [
        {
          text: "Saketh",
          value: "Saketh",
          enabled: true,
          color: "toggle-red",
        },
        {
          text: "Bob",
          value: "Bob",
          enabled: true,
          color: "toggle-green",
        },
        {
          text: "Mom",
          value: "Mom",
          enabled: true,
          color: "toggle-blue",
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
.sub-info.bottomleft {
  width: 30%;
  margin-left: 10%;
  margin-right: 10%;
  display: inline-block;
}
.sub-info.right {
  width: 66%;
  display: inline-block;
  min-height: 100% !important;
}
.sub-info.bottomright {
  width: 30%;
  margin-left: 10%;
  margin-right: 10%;
  display: inline-block;
  min-height: 100% !important;
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

/*------------------------------------------------*/

.screen {
  background: #222;
  display: inline-block;
  padding: 64px;
  margin-bottom: 50px;
}

#app {
  height: 256px;
  width: 256px;
}

@keyframes RingProgress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.ActivityRings {
  height: 100%;
  width: 100%;

  .ring {
    transform-origin: 50%;
  }
  .completed {
    animation: RingProgress 1s ease-in-out forwards;
    stroke-linecap: round;
  }
  circle {
    fill: none;
  }
}

$color-red: #c53f3d;
.ring1 {
  .background {
    stroke: transparentize($color-red, 0.8);
  }
  .completed {
    stroke: $color-red;
  }
}

$color-green: #94d55a;
.ring2 {
  .background {
    stroke: transparentize($color-green, 0.8);
  }
  .completed {
    stroke: $color-green;
  }
}

$color-blue: #70bed7;
.ring3 {
  .background {
    stroke: transparentize($color-blue, 0.8);
  }
  .completed {
    stroke: $color-blue;
  }
}

.toggle-red {
  --toggle-bg-on: #c53f3d;
  --toggle-border-on: #c53f3d;
  --toggle-width: 6rem;
  padding: 1.5rem;
}
.toggle-green {
  --toggle-bg-on: #94d55a;
  --toggle-border-on: #94d55a;
  --toggle-width: 6rem;
  padding: 1.5rem;
}
.toggle-blue {
  --toggle-bg-on: #70bed7;
  --toggle-border-on: #70bed7;
  --toggle-width: 6rem;
  padding: 1.5rem;
}
</style>
