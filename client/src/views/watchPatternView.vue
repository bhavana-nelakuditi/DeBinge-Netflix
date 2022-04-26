<template>
  <div>
    <Navsection />
    <div class="watchPattern">
      <div class="splitScreen leftScreen">
        <div class="filter">
          <div class="sub-info">
            <Toggle
              @change="onChange"
              v-for="option in options"
              :value="option.value"
              v-model="option.enabled"
              :onLabel="option.text"
              :offLabel="option.text"
            />
          </div>
          <div class="sub-info"></div>
          <div class="sub-info"></div>
        </div>
        <div class="graphArea">
          <BarChart :chartData="chartData" />
        </div>
      </div>
      <div class="splitScreen rightScreen">
        <img
          alt="Show Cloud"
          src="../assets/cloud.png"
          style="width: 75%; margin-top: 20%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";
import BarChart from "@/components/BarChart.vue";

import Toggle from "@vueform/toggle";

export default {
  name: "watchPattern",
  components: {
    BarChart,
    Navsection,
    Toggle,
  },
  data() {
    return {
      chartData: {
        labels: ["Crown", "Game of Thrones", "You", "Kota Factory", "HIMYM"],
        datasets: [
          {
            label: "TV Shows",
            backgroundColor: "#f87979",
            data: [5, 9, 15, 7, 2],
          },
        ],
      },
      data2graph: [
        { name: "Crown", hours: 5, genre: "Drama" },
        { name: "Game of Thrones", hours: 9, genre: "Action" },
        { name: "You", hours: 15, genre: "Thriller" },
        { name: "Kota Factory", hours: 7, genre: "Drama" },
        { name: "HIMYM", hours: 2, genre: "Sitcom" },
      ],
      options: [
        { text: "Drama", value: "Drama", enabled: true },
        { text: "Action", value: "Action", enabled: true },
        { text: "Thriller", value: "Thriller", enabled: true },
        { text: "Sitcom", value: "Sitcom", enabled: true },
      ],
    };
  },
  methods: {
    onChange() {
      this.data2graph = [
        { name: "Crown", hours: 5, genre: "Drama" },
        { name: "Game of Thrones", hours: 9, genre: "Action" },
        { name: "You", hours: 15, genre: "Thriller" },
        { name: "Kota Factory", hours: 7, genre: "Drama" },
        { name: "HIMYM", hours: 2, genre: "Sitcom" },
      ];
      this.chartData.labels = [];
      this.chartData.datasets[0].data = [];
      var data2graphLoop = [];
      this.options.forEach((element) => {
        if (element["enabled"]) {
          this.data2graph.forEach((el) => {
            if (element["value"] == el["genre"]) {
              data2graphLoop.push(el);
            }
          });
        }
      });
      this.chartData.labels = [];
      this.chartData.datasets[0].data = [];
      data2graphLoop.forEach((elemento) => {
        this.chartData.labels.push(elemento.name);
        this.chartData.datasets[0].data.push(elemento.hours);
      });
      this.data2graph = data2graphLoop;
    },
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.watchPattern {
  margin: 40px 0 0 0;
  width: 100%;
  display: flex;
}
.splitScreen.leftScreen {
  width: 50%;
  height: 100%;
  margin: 0 10px 0 10px;
  display: inline-block;
}
.splitScreen.rightScreen {
  width: 50%;
  margin: 0 10px 0 10px;
  display: inline-block;
  // border: 1px solid green;
  min-height: 100% !important;
}
.tableCSS {
  width: 100%;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
.filter {
  margin: 40px 0 0;
  height: 20%;
  width: 100%;
}
.sub-info {
  width: 33%;
  display: inline-block;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
