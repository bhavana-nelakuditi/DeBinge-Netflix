<template>
  <div>
    <Navsection />
    <div class="watchPattern">
      <div class="splitScreen leftScreen">
        <div class="filter">
          <div class="sub-info"></div>
          <div class="sub-info"></div>
          <div class="sub-info">
            <select v-model="selected" @change="onChange()" id="shows">
              <option v-for="option in options" :value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="graphArea">
          <BarChart :chartData="chartData" />
        </div>
      </div>
      <div class="splitScreen rightScreen">
        <table class="tableCSS" id="customers">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Hours</th>
            </tr>
            <tr v-for="(data, i) in data2graph" :key="i">
              <td>{{ data.name }}</td>
              <td>{{ data.hours }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navsection from "@/components/Navsection.vue";
import BarChart from "@/components/BarChart.vue";

export default {
  name: "watchPattern",
  components: {
    BarChart,
    Navsection,
  },
  data() {
    return {
      selected: "All",
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
        { text: "All", value: "All" },
        { text: "Drama", value: "Drama" },
        { text: "Action", value: "Action" },
        { text: "Thriller", value: "Thriller" },
        { text: "Sitcom", value: "Sitcom" },
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
      this.data2graph.forEach((element) => {
        if (this.selected == element.genre) {
          data2graphLoop.push(element);
          this.chartData.labels.push(element.name);
          this.chartData.datasets[0].data.push(element.hours);
        } else if (this.selected == "All") {
          data2graphLoop = [
            { name: "Crown", hours: 5, genre: "Drama" },
            { name: "Game of Thrones", hours: 9, genre: "Action" },
            { name: "You", hours: 15, genre: "Thriller" },
            { name: "Kota Factory", hours: 7, genre: "Drama" },
            { name: "HIMYM", hours: 2, genre: "Sitcom" },
          ];
          this.chartData.labels = [
            "Crown",
            "Game of Thrones",
            "You",
            "Kota Factory",
            "HIMYM",
          ];
          this.chartData.datasets[0].data = [5, 9, 15, 7, 2];
        }
      });
      this.data2graph = data2graphLoop;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.watchPattern {
  margin: 40px 0 0 0;
  width: 100%;
  display: flex;
}
.splitScreen.leftScreen {
  width: 70%;
  height: 100%;
  margin: 0 10px 0 10px;
  display: inline-block;
}
.splitScreen.rightScreen {
  width: 25%;
  margin: 0 10px 0 10px;
  display: inline-block;
  border: 1px solid green;
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
