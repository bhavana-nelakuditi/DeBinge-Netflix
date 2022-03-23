<template>
  <div class="watchPattern">
    <div class="splitScreen leftScreen">
      <div class="filter">
        <div class="sub-info"></div>
        <div class="sub-info"></div>
        <div class="sub-info">
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div class="graphArea">
        <BarChart />
      </div>
    </div>
    <div class="splitScreen rightScreen">
      <p>This is side split screen.sflksjfkdlfsdjhfkdhsfkjsdh sfcbhjag</p>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";

export default {
  name: "watchPattern",
  components: {
    BarChart,
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
  border: 3px solid green;
  min-height: 100% !important;
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
